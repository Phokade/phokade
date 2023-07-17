import About from "./layers/About";
import Companies from "./layers/Companies";
import Hero from "./layers/Hero";
import Navbar from "./layers/Navbar";
import Gallery from "./layers/Gallery";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Companies />
			<About />
			<Gallery />
		</>
	);
}

export default App;
