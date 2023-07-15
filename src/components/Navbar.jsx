import React from "react";
import logo from "/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
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
					<button className="px-6 py-3 hover:shadow-lg duration-200 hover:shadow-yellow-300 rounded-full bg-[#E7B10A]">Contact</button>
					<button className="px-3 py-3 rounded-full hover:shadow-lg duration-200 hover:shadow-yellow-300 bg-[#E7B10A]">
						<AiOutlineInstagram size={25} />
					</button>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
