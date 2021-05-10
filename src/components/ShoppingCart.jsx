import { Component } from "react";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCartSharp } from "@material-ui/icons";
import { connect } from "react-redux";
import { showCart } from "../actions/cartActions";

class ShoppingCart extends Component {
	render() {
		const { shown, showCart, cart } = this.props;

		return (
			<IconButton className='cart-btn' onClick={() => showCart(shown)} edge='start' color='inherit' aria-label='menu'>
				<Badge badgeContent={cart.length} color='secondary'>
					<ShoppingCartSharp style={{ fontSize: "24px" }} />
				</Badge>
			</IconButton>
		);
	}
}

export default connect(state => ({ cart: state.cart.cart, shown: state.cart.shown }), { showCart })(ShoppingCart);
