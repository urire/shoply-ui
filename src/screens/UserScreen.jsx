import { Component } from "react";
import { connect } from "react-redux";
import UserOrders from "../components/UserOrders";

class UserScreen extends Component {
	render() {
		const { user } = this.props;

		return <div>{user && <UserOrders user={user} />}</div>;
	}
}

export default connect(state => ({
	user: state.user.user
}))(UserScreen);
