import { useState } from 'react'
import { Box, Button, Checkbox, CheckboxGroup, Collapse, Text } from '@chakra-ui/react'

export default function Sidebar() {
	const [categoryOpen, setCategoryOpen] = useState(false)
	const [typeOpen, setTypeOpen] = useState(false)
  
	return <>
	  <Box>
		<Button onClick={() => setCategoryOpen(!categoryOpen)}>Категория</Button>
		<Collapse in={categoryOpen}>
		  <CheckboxGroup colorScheme="teal">
			<Checkbox>Букеты</Checkbox>
			<Checkbox>Розы</Checkbox>
			{/* Добавьте остальные пункты */}
		  </CheckboxGroup>
		</Collapse>
  
		<Button onClick={() => setTypeOpen(!typeOpen)}>Вид</Button>
		<Collapse in={typeOpen}>
		  <CheckboxGroup colorScheme="teal">
			<Checkbox>Белорусская роза</Checkbox>
			<Checkbox>Роза из Эквадора и Колумбии</Checkbox>
			{/* Добавьте остальные пункты */}
		  </CheckboxGroup>
		</Collapse>
	  </Box>
	  {/* <li>
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
		</div> */}
	</>
	
  }
  
