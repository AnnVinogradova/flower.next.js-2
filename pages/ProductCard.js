import Rift from '../components/Rifts/Rift';
export default function ProductCard() {
	return <>
		<div>
			<ul class="breadcrumb">
				<li><a href="main">Главная</a></li>
				<li><a href="catalog">Букеты</a></li>
			</ul>
		</div>
		<div>
			<img src="img/ProductCard/Frame 1463.png"></img>
			<span>123 отзыва</span>
			<span>Размер:</span>
			<span>30 см</span>
		</div>
		<div>
			<img src="img/ProductCard/VAL_8182_1200 2.jpg"></img>
			<h3>Букет «Вдохновение»</h3>
			<p>Доставка в пределах Москвы — Бесплатно</p>
		</div>
		<div>
			<p>Каждая девушка ждет от кавалера на свидании традиционный знак внимания – цветы. Этот нежный букет подойдет для тонкой романтической утонченной натуры.</p>
		</div>
		<div>
			<span>Выберите размер букета:</span>
			<span>Стандарт</span>
			<span>1250 RUB</span>
		</div>
		<div>
			<span>Стандарт +30%</span>
			<span>1780 RUB</span>
		</div>
		<div>
			<span>Стандарт +60%</span>
			<span>2420 RUB</span>
		</div>
		<div>
			<ul>
				<li>Выберите количество цветов:</li>
				<li>11</li>
				<li>15</li>
				<li>21</li>
				<li>25</li>
				<li>35</li>
				<li>45</li>
				<li>51</li>
				<li>101</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>Выберите ростовку роз:</li>
				<li>40 см</li>
				<li>50 см</li>
				<li>70 см</li>
			</ul>
			<span>1250 RUB</span>
			<span>1550 RUB</span>
		</div>
		<div>
			<button>Заказать</button>
			<button>Купить в 1 клик</button>
		</div>
		<div>
			<img src="img/ProductCard/Frame.svg"></img>
			<span>Состав</span>
			<img src="img/ProductCard/chevron-down.png"></img>
		</div>
		<div>
			<ul>
				<li>Роза кремовая 50см<span>3 шт</span></li>
				<li>Роза розовая 50см<span>2 шт</span></li>
				<li>Гвоздики<span>3 шт</span></li>
				<li>Хризантема кустовая<span>2 шт</span></li>
				<li>Лизиантус<span>3 шт</span></li>
				<li>Маттиола<span>2 шт</span></li>
				<li>Добавления<span>Фисташка</span></li>
				<li>Упаковка<span>фетр, крафт или пленка матовая, лента</span></li>
			</ul>
		</div>
		<Rift />
	</>;
}