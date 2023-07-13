import { Box, Text, Heading} from "@chakra-ui/react";
export default function HeaderFooter() {
	return <>
		<Box bgImage="url('/img/Header/banner.png')"
		 bgSize="cover"
		 bgPosition="center"
		 height="700px"
		 width="1920px">
			<Heading>Дарим красоту и хорошее настроение вашему дому</Heading>
			<Text>Специально для вас — быстрая доставка и отличные цены</Text>
		</Box>
	</>;
}