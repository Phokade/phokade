import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import Button from "../components/Button";
function Navbar() {
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
			id: 1,
			menu: "Tentang",
		},
		{
			id: 2,
			menu: "Layanan",
		},
		{
			id: 3,
			menu: "Kontak",
		},
	];
	return (
		<>
			<nav className={`font-poppins flex justify-between items-center w-full h-24 fixed px-12 duration-200 ${top ? "bg-transparent" : "bg-white bg-opacity-80 backdrop-blur-md"}`}>
				<div className="flex">
					<img src={logo} alt="" />
					<ul className="flex ml-20 gap-10 my-auto">
						{menus.map((menu) => (
							<li key={menu.id} className="capitalize cursor-pointer font-medium hover:border-b-2 border-yellow-400">
								{menu.menu}
							</li>
						))}
					</ul>
				</div>

				<div className="flex gap-5 my-auto text-[#214842] font-semibold">
					<Button content={"Contact"} />
					<Button content={<AiOutlineInstagram size={30} />} />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
