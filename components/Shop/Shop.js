import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Text, Image, Link, Button } from "@chakra-ui/react";

export default function Shop() {
  return (
    <>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="main">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="about">О магазине</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <Heading as="h3" size="md">О магазине</Heading>
        <Text>Магазин Gvozdika.by обеспечит доставку цветов по любому поводу</Text>
        <Text>В случае предварительного заказа мы гарантируем большой выбор срезанных и горшечных растений. В нашем магазине вас ждут профессиональные флористы, которые помогут выбрать букет, соответствующий Вашим пожеланиям и событию. 
          Мы поможем вам в оформлении любого торжества, свадьбы или корпоративного вечера композициями из живых цветов и воздушных шаров. Вы можете приложить к букету записку с пожеланиями или же остаться анонимными. 
          Мы заботимся о Вашем комфорте, поэтому заказывая у нас доставку цветов напрямую к адресату, вы можете получить СМС-оповещение о доставке, а также узнать реакцию получателя.</Text>
      </Box>
      <Box>
        <Image src="/img/AboutShop/florist-with-flowers-1.jpg" alt="Florist with flowers 1" />
      </Box>
      <Box>
        <Image src="/img/AboutShop/florist-with-flowers-2.jpg" alt="Florist with flowers 2" />
        <Text>Мы выполняем свою работу качественно и красиво. 
          Наша команда, работает только на положительный результат, опыт который мы приобрели, делает
          наши услуги выгодными и подходящими, для любого заказчика.
          В нашем каталоге представлено более 600 наименований товаров. Количество наших клиентов продолжает расти, и мы делаем все, чтобы оправдать ваше доверие. 
          Спасибо, что выбрали нас!</Text>
      </Box>
      <Box>
        <Text>Приятных покупок!</Text>
      </Box>
      <Box>
        <Link href="/catalog" legacyBehavior>
          <Button colorScheme="blue">Каталог</Button>
        </Link>
      </Box>
    </>
  );
}
