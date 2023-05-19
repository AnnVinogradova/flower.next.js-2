import Link from 'next/link';

export default function Sidebar() {
	return <>
		<ul class="breadcrumb">
			<li><a href="main">Главная</a></li>
			<li><a href="catalog">Каталог</a></li>
		</ul>
		<div>
			<h2>Каталог</h2>
			<img src="/img/Catalog/x.png"></img>
			<p>Сбросить все</p>
		</div>
		<div>
			<button>Категория</button>
			<img src="/img/Catalog/Vector.png"></img>
			<div className="sidebar">
				<ul>
					<li>
						<input type='checkbox'></input>
						<span>Букеты</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Розы</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Монобукеты</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Срезанные цветы</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Свадебные букеты</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Уличные растения</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Подарки</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Конфеты</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Воздушные шары</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Комнатные растения</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Композиции</span>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<button>Вид</button>
			<img src="/img/Catalog/Vector.png"></img>
			<div className="sidebar">
				<ul>
					<li>
						<input type='checkbox'></input>
						<span>Белорусская роза</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Роза из Эквадора и Колумбии</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Кенийская роза</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Кустовые розы</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Пионовидные розы</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Кустовые пионовидные розы</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Розы Дэвида Остина</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Лепестки роз</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>Крупный бутон</span>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<button>Цвет</button>
			<img src="/img/Catalog/plus.png"></img>
		</div>
		<div>
			<button>Количество</button>
			<img src="/img/Catalog/Vector.png"></img>
			<div className="sidebar">
				<ul>
					<li>
						<input type='checkbox'></input>
						<span>121 роза</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>101 роза</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>65 роз</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>55 роз</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>51 роза</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>45 роз</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>41 роза</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>35 роз</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>31 роза</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>25 роз</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>21 роза</span>
					</li>
					<span>Посмотреть всё</span>
				</ul>
			</div>
		</div>
		<div>
			<button>Размер</button>
			<img src="/img/Catalog/Vector.png"></img>
			<div className="sidebar">
				<ul>
					<li>
						<input type='checkbox'></input>
						<span>170 см</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>150 см</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>90 см</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>70 см</span>
					</li>
					<li>
						<input type='checkbox'></input>
						<span>50 см</span>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<button>Форма букета</button>
			<img src="/img/Catalog/plus.png"></img>
		</div>
		<div>
			<button>Цена</button>
			<img src="/img/Catalog/Vector.png"></img>
			<ul>
				<li>до 30</li>
				<li>30-45</li>
				<li>45-65</li>
				<li>65-80</li>
				<li>от 80</li>
			</ul>
		</div>
	</>
}
