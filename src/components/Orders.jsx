import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders, deleteOrder } from "../actions/orderActions";

class Orders extends Component {
	componentDidMount() {
		this.props.fetchOrders(this.props.user.token);
	}

	render() {
		const { orders, user, deleteOrder } = this.props;

		return !orders ? (
			<div>Loading...</div>
		) : (
			<div className='orders'>
				<h2>Orders</h2>
				<table>
					<thead>
						<tr>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>NAME</th>
							<th>EMAIL</th>
							<th>ADDRESS</th>
							<th>ITEMS</th>
						</tr>
					</thead>
					<tbody>
						{orders.map(order => (
							<tr>
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
								<td>
									<button className='btn btn-label' onClick={() => deleteOrder(user.token, order._id, orders)}>
										Delete
									</button>
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
		orders: state.order.orders
	}),
	{
		fetchOrders,
		deleteOrder
	}
)(Orders);
