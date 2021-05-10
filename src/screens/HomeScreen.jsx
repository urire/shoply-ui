import { Component } from "react";
import { connect } from "react-redux";
import Filter from "../components/Filter";
import Products from "../components/Products";
import Cart from "../components/Cart";

class HomeScreen extends Component {
	render() {
		const { shown } = this.props;

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
}

export default connect(state => ({
	shown: state.cart.shown
}))(HomeScreen);
