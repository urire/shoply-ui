import { connect } from "react-redux";
import { register } from "../actions/userActions";
import Joi from "joi-browser";
import Form from "../components/common/form";

class RegisterScreen extends Form {
	state = {
		data: { name: "", email: "", password: "" },
		errors: {}
	};

	schema = {
		name: Joi.string().required().label("Name"),
		email: Joi.string().required().label("Email"),
		password: Joi.string().required().label("Password")
	};

	doSubmit = async () => {
		const { name, email, password } = this.state.data;
		const { register } = this.props;

		try {
			await register(name, email, password);

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
					{this.renderInput("name", "Name")}
					{this.renderInput("email", "Email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Register")}
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
		register
	}
)(RegisterScreen);
