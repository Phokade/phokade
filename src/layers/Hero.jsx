//import React from "react";
import { Link } from "react-scroll";
import Button from "../components/Button";
import hero from "/BACKGROUND.jpg";

export default function Hero() {
	return (
		<>
			<div className="lg:hidden w-full h-screen flex justify-between items-center px-12 font-poppins">
				<div className="content-left flex flex-col gap-10">
					<h1 className="text-4xl text-[#214842] font-bold leading-[50px]">
						Phokade Arsitektur Nusantara <br /> Penggilingan Padi Modern
					</h1>
					<p className="text-justify text-base">
						Jasa Perencanaan Industri Penggilingan Padi. 
					</p>
					<Link activeClass="active" to={"pricing"} spy={true} smooth={true} duration={500}>
						<Button content={"Produk Kami"} className="px-4 py-3" />
					</Link>
				</div>
			</div>
			<div name="hero" className="hidden w-full h-screen bg-gradient-to-r from-white from-50% to-[#214842] to-50% lg:flex gap-10 justify-between items-center px-12 font-poppins">
				<div className="content-left flex flex-col gap-10">
					<h1 className="text-4xl text-[#214842] font-bold leading-[50px]">
						Phokade Arsitektur Nusantara <br /> Perencanaan Mesin Penggilingan Padi
					</h1>
					<p className="text-justify text-base">
						Sebuah mesin pada era industri saat ini menjadi kebutuhan primer. Kami menyediakan jasa untuk merencanakan mesin agar mempermudah bisnis Anda. Dapatkan rancangan mesin yang bisnis anda butuhkan!
					</p>
					<Link activeClass="active" to={"pricing"} spy={true} smooth={true} duration={500}>
						<Button content={"Produk Kami"} className="px-4 py-3" />
					</Link>
				</div>
				<div>
					<img src={hero} width="1300px" />
				</div>
				<div className="content-right flex flex-col gap-10 lg:-mt-[5.5rem]">
					<h1 className="text-4xl text-white font-bold leading-[50px]">
						Phokade hadir <br /> untuk Anda
					</h1>
					<p className="text-justify text-white text-base">Phokade merupakan penyedia jasa untuk memudahkan proses bisnis Anda pada bidang agriculture. Kami menyediakan beberapa paket untuk digunakan pada bisnis Anda.</p>
				</div>
			</div>
		</>
	);
}
