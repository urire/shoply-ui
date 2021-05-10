import { useState } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import UserScreen from "./screens/UserScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import NavBar from "./components/NavBar";
import store from "./store";

function App() {
	const [shown, setShown] = useState(false);

	const handleShown = () => {
		setShown(!shown);
	};

	return (
		<Provider store={store}>
			<div className='grid-container'>
				<NavBar handleShown={handleShown} />
				<main>
					<Route path='/admin' render={props => <AdminScreen {...props} />} />
					<Route path='/user' render={props => <UserScreen {...props} />} />
					<Route path='/login' render={props => <LoginScreen {...props} />} />
					<Route path='/register' render={props => <RegisterScreen {...props} />} />
					<Route path='/' render={props => <HomeScreen {...props} shown={shown} />} exact />
				</main>
				<footer>All right is reserved.</footer>
			</div>
		</Provider>
	);
}

export default App;
