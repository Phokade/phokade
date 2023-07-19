import { useEffect, useState } from "react";
import logo from "/public/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import Button from "../components/Button";

export default function Navbar() {
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
			to: "#about",
		},
		{
			name: "Layanan",
			to: "#pricing",
		},
		{
			name: "Kontak",
			to: "#contact",
		},
	];
	return (
		<>
			<nav className={`font-poppins flex justify-between items-center w-full h-24 fixed px-12 duration-200 z-50 ${top ? "bg-transparent" : "bg-white bg-opacity-80 backdrop-blur-md"}`}>
				<div className="gap-10 flex">
					<img src={logo} alt="" className="mix-blend-multiply" />
					<ul className="flex justify-center gap-10 m-auto">
						{menus.map((menu, id) => (
							<li key={id} className="capitalize cursor-pointer font-medium hover:border-b-2 border-yellow-400">
								<a href={`${menu.to}`}>{menu.name}</a>
							</li>
						))}
					</ul>
				</div>

				<div className="flex gap-5 my-auto text-[#214842] font-semibold">
					<Button content={"Contact"} />
					<Button content={<AiOutlineInstagram size={30} />} className="px-2" />
				</div>
			</nav>
		</>
	);
}
