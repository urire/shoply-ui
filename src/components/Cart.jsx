import { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { removeFromCart } from "../actions/cartActions";
import { createOrder, clearOrder } from "../actions/orderActions";

class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			address: "",
			showCheckout: false
		};
	}

	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	createOrder = event => {
		event.preventDefault();

		const order = {
			name: this.state.name,
			email: this.state.email,
			address: this.state.address,
			cart: this.props.cart,
			total: this.props.cart.reduce((a, c) => a + c.price * c.count, 0)
		};

		this.props.createOrder(order);
	};

	closeModal = () => {
		this.props.clearOrder();
		this.setState({ showCheckout: false });
	};

	render() {
		const { order, cart, removeFromCart } = this.props;

		return (
			<Fade right cascade>
				<div>
					{cart.length === 0 ? (
						<div className='cart cart-header'>Cart is Empty</div>
					) : (
						<div className='cart cart-header'>You have {cart.length} items in the cart </div>
					)}
					{order && (
						<Modal isOpen={true} onRequestClose={this.closeModal}>
							<Zoom>
								<button
									className='close-modal transparent'
									onClick={cart.forEach(item => {
										removeFromCart(cart, item);
									})}
								/>
								<div className='order-details'>
									<h3 className='success-message'>Your order has been placed.</h3>
									<h2>Order {order._id}</h2>
									<ul>
										<li>
											<div>
												<strong>Name:</strong>
											</div>
											<div>{order.name}</div>
										</li>
										<li>
											<div>
												<strong>Email:</strong>
											</div>
											<div>{order.email}</div>
										</li>
										<li>
											<div>
												<strong>Address:</strong>
											</div>
											<div>{order.address}</div>
										</li>
										<li>
											<div>
												<strong>Date:</strong>
											</div>
											<div>{order.createdAt}</div>
										</li>
										<li>
											<div>
												<strong>Total:</strong>
											</div>
											<div>${order.total}</div>
										</li>
										<li>
											<div>
												<strong>Cart Items:</strong>
											</div>
											<div className='items'>
												{order.cart.map(item => (
													<div>
														{item.count}
														{" x "} {item.title}
													</div>
												))}
											</div>
										</li>
									</ul>
								</div>
							</Zoom>
						</Modal>
					)}
					<div>
						<div className='cart'>
							<Fade right cascade>
								<ul className='cart-items'>
									{cart.map(item => (
										<li key={item._id}>
											<div>
												<img src={item.image} alt={item.title} />
											</div>
											<div className='center'>
												<div>{item.title}</div>
												<div>
													<strong>
														${item.price} x {item.count}{" "}
													</strong>
													<button className='btn btn-label' onClick={() => removeFromCart(cart, item)}>
														Remove
													</button>
												</div>
											</div>
										</li>
									))}
								</ul>
							</Fade>
						</div>
						{cart.length !== 0 && (
							<div>
								<div className='cart'>
									<div className='total'>
										<div>Total: ${cart.reduce((a, c) => a + c.price * c.count, 0)}</div>
										<button
											className='btn btn-primary'
											onClick={() => {
												this.setState({ showCheckout: true });
											}}
										>
											Proceed
										</button>
									</div>
								</div>
								{this.state.showCheckout && (
									<Fade right>
										<div className='cart'>
											<form onSubmit={this.createOrder}>
												<ul className='form-container'>
													<li>
														<label>Email</label>
														<input name='email' type='email' required onChange={this.handleInput}></input>
													</li>
													<li>
														<label>Name</label>
														<input name='name' type='text' required onChange={this.handleInput}></input>
													</li>
													<li>
														<label>Address</label>
														<input name='address' type='text' required onChange={this.handleInput}></input>
													</li>
													<li>
														<button className='btn btn-primary' type='submit'>
															Checkout
														</button>
													</li>
												</ul>
											</form>
										</div>
									</Fade>
								)}
							</div>
						)}
					</div>
				</div>
			</Fade>
		);
	}
}

export default connect(
	state => ({
		cart: state.cart.cart,
		order: state.order.order
	}),
	{
		removeFromCart,
		createOrder,
		clearOrder
	}
)(Cart);
