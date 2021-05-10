import { Component } from "react";
import { Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import AdminScreen from "../screens/AdminScreen";
import UserScreen from "../screens/UserScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import { connect } from "react-redux";

class Body extends Component {
	render() {
		return (
			<main>
				<Route path='/admin' component={AdminScreen} />
				<Route path='/user' component={UserScreen} />
				<Route path='/login' component={LoginScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/' render={props => <HomeScreen {...props} shown={this.props.shown} />} exact />
			</main>
		);
	}
}

export default connect(state => ({
	shown: state.cart.shown
}))(Body);
