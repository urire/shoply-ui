import { Component } from "react";
import UserOrders from "../components/UserOrders";

export default class UserScreen extends Component {
	render() {
		return <div>{this.props.user && <UserOrders user={this.props.user} />}</div>;
	}
}
