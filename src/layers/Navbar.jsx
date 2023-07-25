import { useEffect, useState } from "react";
import logo from "/public/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import Button from "../components/Button";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { DiGoogleDrive } from "react-icons/di";

export default function Navbar() {
	const [nav, setNav] = useState(false);
	const [top, setTop] = useState(true);
	useEffect(() => {
		const scrollHandler = () => {
			setTop(window.pageYOffset <= 20);
		};
		window.addEventListener("scroll", scrollHandler);

		// Explicit call so that the navbar gets blurred when component mounts
		scrollHandler();

		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);
	const menus = [
		{
			name: "Tentang",
			to: "about",
		},
		{
			name: "Layanan",
			to: "pricing",
		},
		{
			name: "Kontak",
			to: "contact",
		},
	];
	return (
		<>
			<nav className={`font-poppins flex justify-between items-center w-full h-24 fixed px-12 duration-200 z-50 ${top ? "bg-transparent" : "bg-white bg-opacity-80 backdrop-blur-md"}`}>
				<div className="gap-10 flex">
					<img src={logo} alt="" />
					<ul className="hidden md:flex justify-center gap-10 m-auto">
						{menus.map((menu, id) => (
							<li key={id} className="capitalize cursor-pointer font-medium hover:border-b-2 border-yellow-400">
								<Link activeClass="active" to={menu.to} spy={true} smooth={true} duration={500}>
									{menu.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="hidden md:flex gap-5 my-auto text-[#214842] font-semibold">
					<Button content={<DiGoogleDrive size={30} />} className="p-2" />
					<Button content={<AiOutlineInstagram size={30} />} className="p-2" />
				</div>

				{/* Mobile Device */}
				<div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-yellow-500 md:hidden">
					{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
				</div>

				{nav && (
					<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black">
						{menus.map((menu) => (
							<li key={menu.id} className="px-4 cursor-pointer capitalize py-4 text-4xl hover:scale-105 duration-200">
								<Link onClick={() => setNav(!nav)} to={menu.to} smooth duration={500}>
									{menu.name}
								</Link>
							</li>
						))}
						<hr className="w-1/2 border-b-2 border-black mt-5 mb-10" />
						<Link onClick={() => setNav(!nav)} to={"gallery"} smooth duration={500}>
							<Button content={"Contact"} className="px-4 py-3 text-4xl" />
						</Link>
					</ul>
				)}
			</nav>
		</>
	);
}
