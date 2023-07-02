import { Box, Text, Image, Flex } from "@chakra-ui/react";

export default function Instagram() {
	return (
		<Box>
			<Text fontSize="xl" fontWeight="bold" mb={2}>
				Мы в Instagram
			</Text>
			<Text>@gvozdika_by</Text>

			<Flex mt={4}>
				<Image src="/img/main/Instagram/Rectangle 1258.jpg" mr={4} />
				<Image src="/img/main/Instagram/Rectangle 1259.jpg" mr={4} />
				<Image src="/img/main/Instagram/Rectangle 1260.jpg" mr={4} />
				<Image src="/img/main/Instagram/Rectangle 1261.jpg" />
			</Flex>
		</Box>
	);
}