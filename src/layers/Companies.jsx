//import React from "react";
import CompanyCard from "../components/CompanyCard";
import putrajaya from "/putra-jaya.png";
import ajok from "/aj-ok.png";
import h2 from "/h2-tehnik.png";
import putrarejeki from "/putra-rejeki.png";

export default function Companies() {
	const companyCards = [
		{
			id: 1,
			image: putrajaya,
		},

		{
			id: 2,
			image: ajok,
		},
		{
			id: 3,
			image: h2,
		},
		{
			id: 4,
			image: putrarejeki,
		},
	];
	return (
		<>
			<div className="w-full h-[485px] flex justify-center items-center font-roboto">
				<div className="flex flex-col font-roboto text-center gap-16">
					<h1 className="text-4xl font-medium">Telah Dipercaya Oleh</h1>
					<p className="text-2xl">
						Partner yang telah bekerja sama dengan Kami. Pastikan perusahaan <br /> Anda adalah yang selanjutnya!
					</p>
					<div className="flex justify-center gap-16">
						{companyCards.map((companyCard) => (
							<CompanyCard image={companyCard.image} key={companyCard.id} />
						))}
					</div>
					<div className="border border-gray-400 mx-8"></div>
				</div>
			</div>
		</>
	);
}
