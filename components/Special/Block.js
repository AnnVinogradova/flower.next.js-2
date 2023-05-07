export default function FlowerBlock(props) {
	return <>
		<div>
			<p>{props.title}</p>
			<span>{props.price}</span>
		</div>
		<div>
			<button>Заказать</button>
		</div>
		<div>
			<span>Купить в 1 клик</span>
		</div>
	</>;
}