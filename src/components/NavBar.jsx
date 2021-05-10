import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/userActions";
import ShoppingCart from "./ShoppingCart";

class NavBar extends Component {
	render() {
		const { user, logout } = this.props;

		return (
			<header>
				<NavLink to='/'>Shoply</NavLink>
				<span>
					{!user ? (
						<span>
							<NavLink className='login' to='/login'>
								Login
							</NavLink>
							<NavLink className='register' to='/register'>
								Register
							</NavLink>
						</span>
					) : (
						<span>
							{user.isAdmin && (
								<NavLink className='admin' to='/admin'>
									Admin
								</NavLink>
							)}
							<NavLink className='user-orders' to='/user'>
								Orders
							</NavLink>
							<NavLink className='logout' to='/' onClick={logout}>
								Logout
							</NavLink>
						</span>
					)}
					<ShoppingCart />
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
		logout
	}
)(NavBar);
