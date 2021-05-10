import { Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import UserScreen from "./screens/UserScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import NavBar from "./components/NavBar";

export default function App() {
	return (
		<div className='grid-container'>
			<NavBar />
			<main>
				<Route path='/admin' component={AdminScreen} />
				<Route path='/user' component={UserScreen} />
				<Route path='/login' component={LoginScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/' component={HomeScreen} exact />
			</main>
			<footer>All right is reserved.</footer>
		</div>
	);
}
