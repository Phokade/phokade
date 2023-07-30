import About from "./layers/About";
import Companies from "./layers/Companies";
import Contact from "./layers/Contact";
import Hero from "./layers/Hero";
import Navbar from "./layers/Navbar";
import Pricing from "./layers/Pricing";
import Gallery from "./layers/Gallery";
import Map from "./layers/Map";
import Footer from "./layers/Footer";
import TechStack from "./layers/TechStack";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Companies />
			<About />
			<Gallery />
			<TechStack />
			<Pricing />
			<Contact />
			<Map />
			<Footer />
		</>
	);
}

export default App;
