import { Provider } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className='grid-container'>
				<NavBar />
				<Body />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
