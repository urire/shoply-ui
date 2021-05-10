import { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/userActions";

class RegisterScreen extends Component {
	state = {
		name: "",
		email: "",
		password: ""
	};

	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	register = () => {
		const { name, email, password } = this.state;
		const { register, history } = this.props;

		if (name === "") {
			alert("name is required");
			return;
		}

		if (email === "") {
			alert("email is required");
			return;
		}

		if (password === "") {
			alert("password is required");
			return;
		}

		register(name, email, password);
		history.push("/");
	};

	render() {
		return (
			<div className='login-form'>
				<ul className='form-container'>
					<li>
						<label>Name</label>
						<input name='name' type='text' required onChange={this.handleInput}></input>
					</li>
					<li>
						<label>Email</label>
						<input name='email' type='email' required onChange={this.handleInput}></input>
					</li>
					<li>
						<label>Password</label>
						<input name='password' type='text' required onChange={this.handleInput}></input>
					</li>
					<li>
						<button className='btn btn-primary' onClick={this.register}>
							Register
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
		register
	}
)(RegisterScreen);
