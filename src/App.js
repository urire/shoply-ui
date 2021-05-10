import { useState } from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import UserScreen from "./screens/UserScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import store from "./store";

import http from "./services/httpService";

function App() {
	const history = useHistory();
	const [shown, setShown] = useState(false);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || null));

	const login = (email, password) => {
		http
			.post("/users/login", { email, password })
			.then(res => {
				const { data } = res;

				const loggedUser = { token: data.token, ...data.user };
				console.log({ token: data.token, ...data.user });

				setUser(loggedUser);

				history.push("/");
				localStorage.setItem("user", JSON.stringify(loggedUser));
			})
			.catch(err => alert("invalid email or password"));
	};

	const register = async (name, email, password) => {
		http
			.post("/users/register", { name, email, password })
			.then(res => {
				const { data } = res;
				const registeredUser = { token: data.token, ...data.user };

				setUser(registeredUser);
				history.push("/");
				localStorage.setItem("user", JSON.stringify(registeredUser));
			})
			.catch(err => alert("invalid name, email or password"));
	};

	const logout = () => {
		setUser(null);

		localStorage.setItem("user", null);
	};

	return (
		<Provider store={store}>
			<div className='grid-container'>
				<header>
					<NavLink to='/'>Shoply</NavLink>
					<span>
						{!user && (
							<span>
								<NavLink className='login' to='/login'>
									Login
								</NavLink>
								<NavLink className='register' to='/register'>
									Register
								</NavLink>
							</span>
						)}
						{user && (
							<span>
								{user.isAdmin && (
									<NavLink className='admin' to='/admin'>
										Admin
									</NavLink>
								)}
								<NavLink className='user-orders' to='/user'>
									Orders
								</NavLink>
								<NavLink className='logout' to='/' onClick={() => logout()}>
									Logout
								</NavLink>
							</span>
						)}
						<ShoppingCart showCart={() => setShown(!shown)} />
					</span>
				</header>
				<main>
					<Route path='/admin' render={props => <AdminScreen {...props} user={user} />} />
					<Route path='/user' render={props => <UserScreen {...props} user={user} />} />
					<Route path='/login' render={props => <LoginScreen {...props} login={login} />} />
					<Route path='/register' render={props => <RegisterScreen {...props} register={register} />} />
					<Route path='/' render={props => <HomeScreen {...props} shown={shown} />} exact />
				</main>
				<footer>All right is reserved.</footer>
			</div>
		</Provider>
	);
}

export default App;
