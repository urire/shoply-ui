import Filter from "../components/Filter";
import Products from "../components/Products";
import Cart from "../components/Cart";

export default function HomeScreen({ shown }) {
	return (
		<div>
			<div className='content'>
				<div className='main'>
					<Filter />
					<Products />
				</div>
				{shown && (
					<div className='sidebar'>
						<Cart />
					</div>
				)}
			</div>
		</div>
	);
}
