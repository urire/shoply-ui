import { Provider } from "react-redux";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className='grid-container'>
				<NavBar />
				<Body />
				<footer>All right is reserved.</footer>
			</div>
		</Provider>
	);
}

export default App;
