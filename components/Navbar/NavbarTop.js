
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavbarTop () {
const router = useRouter();
  return <>
    <nav>
      <ul>
        <li>
          <Link href="/about" legacyBehavior>
            <a className={router.pathname === '/about' ? 'active' : ''}>О магазине</a>
          </Link>
        </li>
        <li>
          <Link href="/delivery" legacyBehavior>
            <a className={router.pathname === '/delivery' ? 'active' : ''}>Доставка</a>
          </Link>
          <ul>
            <li>
              <Link href="/payment" legacyBehavior>
                <a className={router.pathname === '/payment' ? 'active' : ''}>Оплата</a>
              </Link>
            </li>
            <li>
              <Link href="/return" legacyBehavior>
                <a className={router.pathname === '/return' ? 'active' : ''}>Возврат</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/blog" legacyBehavior>
            <a className={router.pathname === '/blog' ? 'active' : ''}>Блог</a>
          </Link>
        </li>
        <li>
          <Link href="/reviews" legacyBehavior>
            <a className={router.pathname === '/reviews' ? 'active' : ''}>Отзывы</a>
          </Link>
        </li>
      </ul>
    </nav>
   <div>
    <ul>
     <li>
      <span>Доставка</span>
     </li>
     <li>
      <span>Пн-Пт 8.00 - 22.00 <br />Сб- Вс 10.00 - 22.00</span>
     </li>
					<li><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.0176 6.69897H9.91523C8.13793 6.69897 6.69189 8.14501 6.69189 9.92231V17.0898C6.69189 18.8671 8.13793 20.3131 9.91523 20.3131H17.0176C18.7949 20.3131 20.2409 18.8671 20.2409 17.0898V9.92231C20.2409 8.14501 18.7949 6.69897 17.0176 6.69897ZM13.4799 17.7978C11.0708 17.7978 9.1109 15.8587 9.1109 13.4753C9.1109 11.0918 11.0711 9.15275 13.4799 9.15275C15.8888 9.15275 17.849 11.0918 17.849 13.4753C17.849 15.8587 15.8891 17.7978 13.4799 17.7978ZM17.9267 10.0039C17.359 10.0039 16.8988 9.54369 16.8988 8.97589C16.8988 8.4081 17.359 7.9479 17.9267 7.9479C18.4945 7.9479 18.9547 8.4081 18.9547 8.97589C18.9547 9.54369 18.4945 10.0039 17.9267 10.0039Z" fill="#00554E" />
						<path d="M13.5 0C6.04423 0 0 6.04423 0 13.5C0 20.9558 6.04423 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04423 20.9558 0 13.5 0ZM21.8354 17.0899C21.8354 19.7465 19.674 21.9077 17.0176 21.9077H9.91529C7.25866 21.9077 5.09754 19.7463 5.09754 17.0899V9.92241C5.09754 7.26578 7.25893 5.10466 9.91529 5.10466H17.0176C19.6743 5.10466 21.8354 7.26605 21.8354 9.92241V17.0899Z" fill="#00554E" />
						<path d="M13.4798 10.7441C11.9481 10.7441 10.7021 11.9692 10.7021 13.4752C10.7021 14.9812 11.9481 16.2063 13.4798 16.2063C15.0115 16.2063 16.2574 14.9812 16.2574 13.4752C16.2574 11.9692 15.0115 10.7441 13.4798 10.7441Z" fill="#00554E" />
					</svg>
					</li>
					<li><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.5 0C6.04423 0 0 6.04423 0 13.5C0 20.9558 6.04423 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04423 20.9558 0 13.5 0ZM19.3542 15.2844C19.4605 15.4158 19.7131 15.6718 20.1128 16.0529H20.1222L20.1315 16.0619L20.1408 16.0715L20.1597 16.0901C21.0401 16.9081 21.6364 17.5983 21.9487 18.1603C21.9676 18.1913 21.9879 18.2307 22.0098 18.2775C22.0314 18.3243 22.0533 18.407 22.0752 18.5255C22.0968 18.6446 22.0952 18.7503 22.0705 18.8439C22.0456 18.9373 21.9676 19.0238 21.8365 19.1015C21.7053 19.1798 21.5211 19.2187 21.2837 19.2187L18.8858 19.2565C18.7361 19.2877 18.5611 19.2721 18.3613 19.2097C18.1612 19.147 17.9991 19.0783 17.8742 19.0035L17.6867 18.8907C17.4992 18.7596 17.2807 18.5598 17.031 18.2915C16.7811 18.0229 16.5673 17.7809 16.3893 17.5654C16.2114 17.35 16.0208 17.1693 15.8177 17.022C15.6146 16.8753 15.4383 16.8268 15.2885 16.8769C15.2699 16.8835 15.2447 16.8944 15.2135 16.9098C15.182 16.9254 15.1292 16.9703 15.0542 17.0456C14.9792 17.1206 14.9121 17.2128 14.8527 17.3218C14.7933 17.4313 14.7402 17.5936 14.6934 17.8091C14.6465 18.0243 14.626 18.2666 14.6326 18.5351C14.6326 18.6285 14.6213 18.7147 14.5997 18.7927C14.5778 18.8708 14.5543 18.9285 14.5294 18.9658L14.4919 19.0126C14.3793 19.1317 14.214 19.2001 13.9955 19.2187H12.9182C12.4747 19.2439 12.0189 19.1924 11.5508 19.0643C11.0826 18.9359 10.6717 18.7708 10.3191 18.5677C9.96594 18.3651 9.64454 18.159 9.35435 17.9498C9.06388 17.7404 8.84377 17.5611 8.69402 17.4113L8.45995 17.1863C8.39753 17.1241 8.31157 17.0302 8.20233 16.9051C8.0931 16.7803 7.86998 16.4964 7.5327 16.0529C7.19542 15.6094 6.86443 15.1382 6.53975 14.6383C6.21506 14.1387 5.83261 13.4797 5.39212 12.6617C4.9519 11.844 4.54453 10.9948 4.16975 10.114C4.13224 10.0144 4.11335 9.93008 4.11335 9.86136C4.11335 9.79292 4.12266 9.74282 4.14155 9.71134L4.17905 9.65522C4.27268 9.5364 4.45063 9.47699 4.7129 9.47699L7.27947 9.45838C7.35448 9.47097 7.4262 9.49123 7.49492 9.51943C7.56364 9.54735 7.61373 9.57391 7.64494 9.59882L7.69176 9.62702C7.79168 9.69601 7.86642 9.79566 7.91652 9.92679C8.04136 10.2394 8.18509 10.5625 8.34743 10.8965C8.50977 11.2305 8.6379 11.4851 8.73153 11.6597L8.88128 11.9316C9.06224 12.3061 9.23717 12.6311 9.40581 12.9057C9.57473 13.1805 9.72585 13.3946 9.86027 13.5474C9.99441 13.7004 10.1239 13.8209 10.249 13.9079C10.3739 13.9955 10.4801 14.0393 10.5677 14.0393C10.655 14.0393 10.7393 14.0237 10.8206 13.9925C10.833 13.9862 10.8486 13.9706 10.8675 13.9457C10.8863 13.9208 10.9236 13.8521 10.98 13.7393C11.0361 13.627 11.0783 13.4803 11.1065 13.2991C11.1347 13.1184 11.1642 12.8654 11.1954 12.5407C11.2266 12.2158 11.2266 11.8256 11.1954 11.3698C11.1828 11.1199 11.1546 10.8921 11.1111 10.6859C11.0673 10.4801 11.0235 10.3363 10.98 10.255L10.9236 10.1428C10.7675 9.93062 10.5023 9.79621 10.1275 9.73981C10.0462 9.72776 10.0618 9.65275 10.1743 9.51532C10.2805 9.39651 10.399 9.30315 10.5302 9.23416C10.8612 9.07209 11.6074 8.99708 12.769 9.00913C13.281 9.0157 13.7026 9.05594 14.0336 9.13095C14.1584 9.16243 14.263 9.20432 14.3473 9.25743C14.4316 9.31027 14.4957 9.38555 14.5395 9.48192C14.583 9.57883 14.6159 9.67876 14.6378 9.7817C14.6597 9.88491 14.6706 10.0273 14.6706 10.208C14.6706 10.3892 14.6676 10.5611 14.6613 10.7232C14.655 10.8855 14.6474 11.1059 14.638 11.3835C14.6287 11.6614 14.6238 11.9193 14.6238 12.1564C14.6238 12.2253 14.6208 12.3562 14.6145 12.5498C14.6082 12.7436 14.6063 12.8933 14.6099 12.9993C14.6129 13.1055 14.6238 13.2323 14.6424 13.3787C14.6613 13.5255 14.6972 13.6476 14.7503 13.7439C14.8031 13.8408 14.8735 13.9172 14.9611 13.9733C15.0109 13.9862 15.064 13.9985 15.1204 14.0111C15.1765 14.0234 15.2576 13.9895 15.3638 13.9079C15.4698 13.8269 15.5886 13.719 15.7197 13.5849C15.8508 13.451 16.0132 13.2418 16.2067 12.9574C16.4 12.6738 16.6125 12.3379 16.8435 11.9505C17.2183 11.3011 17.5523 10.5983 17.8458 9.84275C17.8707 9.78005 17.9019 9.72557 17.9394 9.67876C17.9769 9.63167 18.0111 9.59882 18.0423 9.5802L18.0798 9.552C18.0922 9.54571 18.1078 9.53804 18.1267 9.52874C18.1456 9.5197 18.1861 9.51012 18.2485 9.50054C18.3109 9.4915 18.3733 9.48986 18.436 9.49616L21.1337 9.47699C21.3771 9.44606 21.5769 9.45372 21.733 9.50026C21.889 9.54708 21.986 9.59882 22.0235 9.65494L22.0799 9.74857C22.2233 10.1485 21.7552 11.0659 20.6749 12.5024C20.5249 12.7025 20.3217 12.9681 20.066 13.2988C19.579 13.9235 19.2981 14.3325 19.2236 14.5266C19.1169 14.7821 19.1607 15.035 19.3542 15.2844Z" fill="#00554E" />
					</svg>
					</li>
					<li><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.5 0C6.04423 0 0 6.04423 0 13.5C0 20.9558 6.04423 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04423 20.9558 0 13.5 0ZM21.094 6.27447L18.0714 20.4698C18.0147 20.7485 17.6971 20.8851 17.4559 20.734L12.8076 17.6511L10.3626 19.9264C10.145 20.1126 9.80798 20.022 9.71325 19.7515L8.1213 14.7306L3.84643 12.9774C3.51845 12.8279 3.52311 12.3056 3.85929 12.175L20.547 5.81344C20.8476 5.69682 21.1581 5.95854 21.094 6.27447Z" fill="#00554E" />
						<path d="M10.2271 18.2623L10.4986 15.6813L18.0376 8.31201L8.93652 14.2889L10.2271 18.2623Z" fill="#00554E" />
					</svg>
					</li>
					<li><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_6221_11830)">
							<path d="M14.0495 5.7168C10.288 5.7168 7.22891 8.7756 7.22754 12.5355C7.22699 13.8241 7.58754 15.0788 8.27004 16.1646L8.43212 16.4225L7.74332 18.9389L10.3241 18.2619L10.5732 18.4097C11.6201 19.0312 12.8203 19.3597 14.0441 19.3603H14.0468C17.8054 19.3603 20.8644 16.3012 20.8661 12.541C20.8669 10.7188 20.1581 9.00556 18.8706 7.71667C17.5831 6.4275 15.8709 5.71734 14.0495 5.7168ZM18.0608 15.4673C17.8899 15.9461 17.0708 16.3833 16.6772 16.4419C16.324 16.4947 15.8769 16.5166 15.3861 16.3606C15.0885 16.2661 14.7066 16.1399 14.2174 15.9289C12.1605 15.041 10.8174 12.9703 10.7151 12.8336C10.6127 12.6968 9.87788 11.7222 9.87788 10.713C9.87788 9.70394 10.4073 9.20815 10.5954 9.00282C10.7832 8.7975 11.0055 8.7463 11.1421 8.7463C11.2787 8.7463 11.4156 8.74767 11.535 8.75342C11.6609 8.75972 11.8298 8.70579 11.9963 9.10521C12.1671 9.51586 12.5772 10.5247 12.6284 10.6274C12.6796 10.73 12.7138 10.8497 12.6454 10.9865C12.5769 11.1231 12.543 11.2088 12.4403 11.3285C12.3377 11.4481 12.2252 11.5957 12.1329 11.6877C12.0302 11.7898 11.9235 11.9009 12.0431 12.106C12.1627 12.3113 12.5742 12.9826 13.1836 13.526C13.9666 14.2244 14.6272 14.4409 14.8322 14.5436C15.0373 14.6463 15.1569 14.629 15.2763 14.4924C15.3959 14.3555 15.7888 13.8937 15.9254 13.6886C16.062 13.4836 16.1986 13.5175 16.3867 13.586C16.5745 13.6544 17.5825 14.1502 17.7876 14.2529C17.9926 14.3555 18.1292 14.4067 18.1804 14.4924C18.2316 14.5778 18.2316 14.9885 18.0608 15.4673Z" fill="#00554E" />
							<path d="M13.5 0C6.04423 0 0 6.04423 0 13.5C0 20.9558 6.04423 27 13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04423 20.9558 0 13.5 0ZM14.047 20.7458C14.0467 20.7458 14.0473 20.7458 14.047 20.7458H14.0437C12.6705 20.7452 11.3214 20.4008 10.1231 19.7471L5.77375 20.8882L6.9378 16.6365C6.21971 15.3923 5.84191 13.9807 5.84274 12.535C5.8441 8.01124 9.5249 4.33099 14.047 4.33099C16.2418 4.33182 18.3019 5.18624 19.8508 6.73713C21.3998 8.28775 22.2526 10.3492 22.2515 12.5415C22.2496 17.0653 18.5688 20.7458 14.047 20.7458Z" fill="#00554E" />
						</g>
						<defs>
							<clipPath id="clip0_6221_11830">
								<rect width="27" height="27" fill="white" />
							</clipPath>
						</defs>
					</svg>
					</li>
					<li>
						<span>RU</span>
						<span><svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 0.5L4 3.5L7 0.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						</span>
					</li>
				</ul>
			</div>
  </>
	
}