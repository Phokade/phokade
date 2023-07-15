import React from "react";
import logo from "/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import Button from "../components/Button";
function Navbar() {
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
			<nav className="font-poppins flex justify-between items-center w-full h-32 bg-transparent fixed px-12">
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
					<Button content={"Contact"} style={{ width: "100px" }} />
					<Button content={<AiOutlineInstagram size={30} />} />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
