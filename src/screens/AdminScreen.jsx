import { Component } from "react";
import { connect } from "react-redux";
import Orders from "../components/Orders";

class AdminScreen extends Component {
	render() {
		const { user } = this.props;

		return <div>{user && <Orders user={user} />}</div>;
	}
}

export default connect(state => ({
	user: state.user.user
}))(AdminScreen);
