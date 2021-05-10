import { Component } from "react";

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	login = () => {
		if (this.state.email === "") {
			alert("email is required");
			return;
		}

		if (this.state.password === "") {
			alert("password is required");
			return;
		}

		this.props.login(this.state.email, this.state.password);
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