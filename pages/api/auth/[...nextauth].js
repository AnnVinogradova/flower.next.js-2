import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		
		GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),

		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				userphone: { label: 'Телефон', type: 'text', placeholder: 'Введите телефон' },
				useremail: { label: 'или Электронная почта', type: 'text', placeholder: 'Введите электронную почту' },
				password: { label: 'Пароль', type: 'password' }
			},
			// eslint-disable-next-line no-unused-vars
			async authorize(credentials) {
				if ('79036957460' === credentials.userphone && '111' === credentials.password) {
                    return { id: '1', name: 'Ann', email: 'saikotakaki@gmail.com' };
                  } else if ('saikotakaki@gmail.com' === credentials.useremail && '111' === credentials.password) {
                    return { id: '1', name: 'Ann', email: 'saikotakaki@gmail.com' };
                  } else {
                    return null;
			  }
         }})
    ],

	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.debug('>> callback signIn', { user, account, profile, email, credentials });
			return true;
		},
		async redirect({ url, baseUrl }) {
			console.debug('>> callback redirect', { url, baseUrl });
			return baseUrl;
		},
		async session({ session, user, token }) {
			console.debug('>> callback session', { session, user, token });
			session.user.id = user.id;
			session.user.role = user.role;
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			console.debug('>> callback jwt', { token, user, account, profile, isNewUser });
			return token;
		}
	}
};
const resf = NextAuth(authOptions);
export default (...params) => {
	const [req] = params;
	console.log('pages/api/auth/[...nextauth].js ');
	console.log('>> ', req.method, ' запрос на', req.url, req.query);
	return resf(...params);
};