import About from "./layers/About";
import Companies from "./layers/Companies";
import Contact from "./layers/Contact";
import Hero from "./layers/Hero";
import Navbar from "./layers/Navbar";
import Pricing from "./layers/Pricing";
import Gallery from "./layers/Gallery";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Companies />
			<About />
			<Gallery />
			<Pricing />
			<Contact />
		</>
	);
}

export default App;
