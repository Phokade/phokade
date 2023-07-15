import React from "react";
import Button from "../components/Button";
import hero from "/hero.png";

function Hero() {
	return (
		<>
			<div className="w-full h-screen bg-gradient-to-r from-white from-50% to-[#214842] to-50% flex gap-10 justify-between items-center px-12 font-poppins">
				<div className="content-left flex flex-col gap-10 w-[550px]">
					<h1 className="text-5xl text-[#214842] font-bold leading-[70px]">
						Memudahkan <br /> proses bisnis Anda
					</h1>
					<p className="text-justify">Sebuah mesin pada era industri saat ini menjadi kebutuhan primer. Kami menyediakan jasa untuk merencanakan mesin agar mempermudah bisnis Anda. Dapatkan rancangan mesin yang bisnis anda butuhkan!</p>
					<Button content={"Produk Kami"} />
				</div>
				<div>
					<img src={hero} />
				</div>
				<div className="content-right flex flex-col gap-10 w-[550px] lg:-mt-[8rem]">
					<h1 className="text-5xl text-white font-bold leading-[70px]">
						Phokade hadir <br /> untuk Anda
					</h1>
					<p className="text-justify text-white">Phokade merupakan penyedia jasa untuk memudahkan proses bisnis Anda pada bidang agriculture. Kami menyediakan beberapa paket untuk digunakan pada bisnis Anda.</p>
				</div>
			</div>
		</>
	);
}

export default Hero;
