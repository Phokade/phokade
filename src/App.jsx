import About from "./layers/About";
import Companies from "./layers/Companies";
import Contact from "./layers/Contact";
import Hero from "./layers/Hero";
import Navbar from "./layers/Navbar";
import Pricing from "./layers/Pricing";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Companies />
			<About />
			<Pricing />
			<Contact />
		</>
	);
}

export default App;
