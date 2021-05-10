import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserOrders } from "../actions/orderActions";

class UserOrders extends Component {
	componentDidMount() {
		this.props.fetchUserOrders(this.props.user.token);
	}

	render() {
		const { userOrders } = this.props;

		return !userOrders ? (
			<div>Loading...</div>
		) : userOrders.length === 0 ? (
			<div>No Orders</div>
		) : (
			<div className='orders'>
				<h2>Orders</h2>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>NAME</th>
							<th>EMAIL</th>
							<th>ADDRESS</th>
							<th>ITEMS</th>
						</tr>
					</thead>
					<tbody>
						{userOrders.map(order => (
							<tr>
								<td>{order._id}</td>
								<td>{order.createdAt}</td>
								<td> ${order.total}</td>
								<td>{order.name}</td>
								<td>{order.email}</td>
								<td>{order.address}</td>
								<td>
									{order.cart.map(item => (
										<div>
											{item.count} {" x "} {item.title}
										</div>
									))}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(
	state => ({
		userOrders: state.order.userOrders
	}),
	{
		fetchUserOrders
	}
)(UserOrders);
