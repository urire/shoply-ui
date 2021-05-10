import { Component } from "react";
import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCartSharp } from "@material-ui/icons";
import { connect } from "react-redux";

class ShoppingCart extends Component {
	render() {
		return (
			<IconButton
				className='cart-btn'
				onClick={this.props.showCart}
				edge='start'
				color='inherit'
				aria-label='menu'
			>
				<Badge badgeContent={this.props.cart.length} color='secondary'>
					<ShoppingCartSharp style={{ fontSize: "24px" }} />
				</Badge>
			</IconButton>
		);
	}
}

export default connect(state => ({ cart: state.cart.cart }))(ShoppingCart);
