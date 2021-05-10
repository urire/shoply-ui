import { Component } from "react";
import Orders from "../components/Orders";

export default class AdminScreen extends Component {
	render() {
		return <div>{this.props.user && <Orders user={this.props.user} />}</div>;
	}
}
