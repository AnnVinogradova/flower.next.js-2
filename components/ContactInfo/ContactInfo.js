import Link from "next/link"
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink} from '@chakra-ui/react'
export default function ContactInfo(){
    return<>
	<Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Главная</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Контакты</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
<div>
    <h3>Контакты</h3>
    <span>Магазин</span>
</div>
<div>
    <span>Телефон</span>
<ul>
				<li>
					<span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M23.9105 19.9361V22.3361C23.9114 22.5589 23.8658 22.7794 23.7765 22.9836C23.6872 23.1877 23.5563 23.3709 23.3922 23.5216C23.228 23.6722 23.0342 23.7869 22.8231 23.8582C22.612 23.9296 22.3884 23.9561 22.1665 23.9361C19.7048 23.6686 17.3401 22.8274 15.2625 21.4801C13.3296 20.2518 11.6908 18.613 10.4625 16.6801C9.11048 14.593 8.26909 12.2169 8.00649 9.74408C7.9865 9.52285 8.01279 9.29989 8.08369 9.08938C8.15459 8.87887 8.26855 8.68543 8.41831 8.52137C8.56806 8.35732 8.75034 8.22625 8.95353 8.1365C9.15671 8.04675 9.37637 8.00029 9.59849 8.00008H11.9985C12.3867 7.99626 12.7631 8.13374 13.0575 8.3869C13.3519 8.64007 13.5442 8.99163 13.5985 9.37608C13.6998 10.1441 13.8877 10.8983 14.1585 11.6241C14.2661 11.9104 14.2894 12.2216 14.2256 12.5208C14.1618 12.82 14.0136 13.0946 13.7985 13.3121L12.7825 14.3281C13.9213 16.3309 15.5797 17.9892 17.5825 19.1281L18.5985 18.1121C18.816 17.897 19.0906 17.7488 19.3898 17.685C19.689 17.6211 20.0002 17.6444 20.2865 17.7521C21.0123 18.0229 21.7664 18.2108 22.5345 18.3121C22.9231 18.3669 23.278 18.5626 23.5317 18.8621C23.7854 19.1615 23.9202 19.5437 23.9105 19.9361Z" fill="#AE8646" />
					</svg></span>
					<a href="tel:7-0297-177-888">
						<span>8-0297-177-888</span>
					</a>
				</li>
				<li>
					<span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M23.9105 19.9361V22.3361C23.9114 22.5589 23.8658 22.7794 23.7765 22.9836C23.6872 23.1877 23.5563 23.3709 23.3922 23.5216C23.228 23.6722 23.0342 23.7869 22.8231 23.8582C22.612 23.9296 22.3884 23.9561 22.1665 23.9361C19.7048 23.6686 17.3401 22.8274 15.2625 21.4801C13.3296 20.2518 11.6908 18.613 10.4625 16.6801C9.11048 14.593 8.26909 12.2169 8.00649 9.74408C7.9865 9.52285 8.01279 9.29989 8.08369 9.08938C8.15459 8.87887 8.26855 8.68543 8.41831 8.52137C8.56806 8.35732 8.75034 8.22625 8.95353 8.1365C9.15671 8.04675 9.37637 8.00029 9.59849 8.00008H11.9985C12.3867 7.99626 12.7631 8.13374 13.0575 8.3869C13.3519 8.64007 13.5442 8.99163 13.5985 9.37608C13.6998 10.1441 13.8877 10.8983 14.1585 11.6241C14.2661 11.9104 14.2894 12.2216 14.2256 12.5208C14.1618 12.82 14.0136 13.0946 13.7985 13.3121L12.7825 14.3281C13.9213 16.3309 15.5797 17.9892 17.5825 19.1281L18.5985 18.1121C18.816 17.897 19.0906 17.7488 19.3898 17.685C19.689 17.6211 20.0002 17.6444 20.2865 17.7521C21.0123 18.0229 21.7664 18.2108 22.5345 18.3121C22.9231 18.3669 23.278 18.5626 23.5317 18.8621C23.7854 19.1615 23.9202 19.5437 23.9105 19.9361Z" fill="#AE8646" />
					</svg></span>
					<a href="tel:7-0257-177-888">
						<span>7-0257-177-888</span>
					</a>
				</li>
				<li>
					<span><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M23.9105 19.9361V22.3361C23.9114 22.5589 23.8658 22.7794 23.7765 22.9836C23.6872 23.1877 23.5563 23.3709 23.3922 23.5216C23.228 23.6722 23.0342 23.7869 22.8231 23.8582C22.612 23.9296 22.3884 23.9561 22.1665 23.9361C19.7048 23.6686 17.3401 22.8274 15.2625 21.4801C13.3296 20.2518 11.6908 18.613 10.4625 16.6801C9.11048 14.593 8.26909 12.2169 8.00649 9.74408C7.9865 9.52285 8.01279 9.29989 8.08369 9.08938C8.15459 8.87887 8.26855 8.68543 8.41831 8.52137C8.56806 8.35732 8.75034 8.22625 8.95353 8.1365C9.15671 8.04675 9.37637 8.00029 9.59849 8.00008H11.9985C12.3867 7.99626 12.7631 8.13374 13.0575 8.3869C13.3519 8.64007 13.5442 8.99163 13.5985 9.37608C13.6998 10.1441 13.8877 10.8983 14.1585 11.6241C14.2661 11.9104 14.2894 12.2216 14.2256 12.5208C14.1618 12.82 14.0136 13.0946 13.7985 13.3121L12.7825 14.3281C13.9213 16.3309 15.5797 17.9892 17.5825 19.1281L18.5985 18.1121C18.816 17.897 19.0906 17.7488 19.3898 17.685C19.689 17.6211 20.0002 17.6444 20.2865 17.7521C21.0123 18.0229 21.7664 18.2108 22.5345 18.3121C22.9231 18.3669 23.278 18.5626 23.5317 18.8621C23.7854 19.1615 23.9202 19.5437 23.9105 19.9361Z" fill="#AE8646" />
					</svg></span>
					<a href="tel:7-0447-833-777">
						<span>7-0447-833-777</span>
					</a>
				</li>
			</ul>
</div>
<div>
    <span>Skype</span>
    <Link href="skype:username?call" legacyBehavior>
  <a>gvozdikaby</a>
</Link>
</div>
<div>
    <p>Вы можете заказать любой понравившийся букет по телефонам или через форму заказа на сайте, а также приобрести цветы в нашем розничном магазине по адресу:
г. Москва, ул. Ленина д. 46 пом.3</p>
</div>
<div>
	<form>
		<span>Остались вопросы?</span>
		<span>Напишите нам</span>
		<input type="text" placeholder="Введите ваше имя"></input>
		<input type="text" placeholder="Введите вашу электронную почту"></input>
		<textarea placeholder="Введите ваше сообщение"></textarea>
		<input type="checkbox"></input>
		<span>Я согласен(а) на оработку персональных данных</span>
		<button>Отправить</button>
	</form>
</div>
<div>
	<h4>Реквизиты</h4>
	<span>ООО "Трансстиль-Групп" УНП: 190929286, юридический адрес: 220030, г. Москва, ул. Ленина, д.46, пом.3</span>
			<span>Дата регистрации интернет-магазина в Торговом реестре: 07 апреля 2015г. №156730</span>
			<span>Свидетельство о гос. регистрации №190929286 от 18.12.2007</span>
</div>

    </>

}
