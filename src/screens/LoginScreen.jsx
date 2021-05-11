import { connect } from "react-redux";
import { login } from "../actions/userActions";
import Joi from "joi-browser";
import Form from "../components/common/form";

class LoginScreen extends Form {
	state = {
		data: { email: "", password: "" },
		errors: {}
	};

	schema = {
		email: Joi.string().required().label("Email"),
		password: Joi.string().required().label("Password")
	};

	doSubmit = async () => {
		const { email, password } = this.state.data;
		const { login } = this.props;

		try {
			await login(email, password);

			this.props.history.push("/");
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.email = ex.response.data;
				this.setState({ errors });
			}
		}
	};

	render() {
		return (
			<div className='login-form'>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Login")}
				</form>
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
