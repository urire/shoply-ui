import { Component } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends Component {
	state = {
		product: null
	};

	componentDidMount() {
		this.props.fetchProducts();
	}

	openModal = product => {
		this.setState({ product });
	};

	closeModal = () => {
		this.setState({ product: null });
	};

	render() {
		const { product } = this.state;
		const { products, addToCart, cart } = this.props;

		return (
			<div>
				<Fade bottom cascade>
					{!products ? (
						<div>Loading...</div>
					) : (
						<ul className='products'>
							{products.map(product => (
								<li key={product._id}>
									<div className='product'>
										<NavLink to={"#" + product._id} onClick={() => this.openModal(product)}>
											<img src={product.image} alt={product.title}></img>
											<p>{product.title}</p>
										</NavLink>
										<div className='product-price'>
											<div>${product.price}</div>
											<button className='btn btn-label' onClick={() => addToCart(cart, product)}>
												Add To Cart
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					)}
				</Fade>
				{product && (
					<Modal isOpen={true} onRequestClose={this.closeModal}>
						<Zoom>
							<button className='close-modal' onClick={this.closeModal}>
								x
							</button>
							<div className='product-details'>
								<img src={product.image} alt={product.title} />
								<div className='product-details-description'>
									<p>
										<strong>{product.title}</strong>
									</p>
									<p>{product.description}</p>
									<p>
										Available Sizes:{" "}
										{product.availableSizes.map(size => (
											<span> {size}</span>
										))}
									</p>
									<div className='product-price'>
										<div>${product.price}</div>
										<button
											className='btn btn-label'
											onClick={() => {
												addToCart(cart, product);
												this.closeModal();
											}}
										>
											Add To Cart
										</button>
									</div>
								</div>
							</div>
						</Zoom>
					</Modal>
				)}
			</div>
		);
	}
}

export default connect(
	state => ({
		products: state.products.filteredItems,
		cart: state.cart.cart
	}),
	{
		fetchProducts,
		addToCart
	}
)(Products);
