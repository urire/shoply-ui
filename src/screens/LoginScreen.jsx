import { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/userActions";

class LoginScreen extends Component {
	state = {
		email: "",
		password: ""
	};

	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	login = () => {
		const { email, password } = this.state;
		const { login, history } = this.props;

		if (email === "") {
			alert("email is required");
			return;
		}

		if (password === "") {
			alert("password is required");
			return;
		}

		login(email, password);
		history.push("/");
	};

	render() {
		return (
			<div className='login-form'>
				<ul className='form-container'>
					<li>
						<label>Email</label>
						<input name='email' type='email' required onChange={this.handleInput}></input>
					</li>
					<li>
						<label>Password</label>
						<input name='password' type='text' required onChange={this.handleInput}></input>
					</li>
					<li>
						<button className='btn btn-primary' onClick={this.login}>
							Login
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		user: state.user.user
	}),
	{
		login
	}
)(LoginScreen);
