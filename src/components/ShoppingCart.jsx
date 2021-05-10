import { Component } from "react";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCartSharp } from "@material-ui/icons";
import { connect } from "react-redux";

class ShoppingCart extends Component {
	render() {
		const { showCart, cart } = this.props;

		return (
			<IconButton className='cart-btn' onClick={showCart} edge='start' color='inherit' aria-label='menu'>
				<Badge badgeContent={cart.length} color='secondary'>
					<ShoppingCartSharp style={{ fontSize: "24px" }} />
				</Badge>
			</IconButton>
		);
	}
}

export default connect(state => ({ cart: state.cart.cart }))(ShoppingCart);
