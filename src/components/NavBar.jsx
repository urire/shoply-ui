import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../actions/userActions";
import ShoppingCart from "./ShoppingCart";

class NavBar extends Component {
	render() {
		const { user, handleShown, logout } = this.props;

		return (
			<header>
				<NavLink to='/'>Shoply</NavLink>
				<span>
					{!user && (
						<span>
							<NavLink className='login' to='/login'>
								Login
							</NavLink>
							<NavLink className='register' to='/register'>
								Register
							</NavLink>
						</span>
					)}
					{user && (
						<span>
							{user.isAdmin && (
								<NavLink className='admin' to='/admin'>
									Admin
								</NavLink>
							)}
							<NavLink className='user-orders' to='/user'>
								Orders
							</NavLink>
							<NavLink className='logout' to='/' onClick={() => logout()}>
								Logout
							</NavLink>
						</span>
					)}
					<ShoppingCart showCart={() => handleShown()} />
				</span>
			</header>
		);
	}
}

export default connect(
	state => ({
		user: state.user.user
	}),
	{
		login,
		logout
	}
)(NavBar);
