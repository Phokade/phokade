//import React, { useRef, useState } from "react";
import PricingCard from "../components/PricingCard";
import logo from "/public/logo.png";

export default function Pricing() {
	const pricings = [
		{
			image: logo,
			title: "INSTALASI DRYER DAN TUNGKU",
			description: "Perencanaan.",
			benefits: [
				{
					id: 1,
					name: "GAMBAR KERJA",
				},
				{
					id: 2,
					name: "RENCANA ANGGARAN BIAYA (RAB)",
				},
			],
		},

		{
			image: logo,
			title: "INSTALASI KIBI DAN COLOUR SORTER",
			description: "Paket untuk Anda yang baru memulai bisnis.",
			benefits: [
				{
					id: 1,
					name: "GAMBAR KERJA",
				},
				{
					id: 2,
					name: "RENCANA ANGGARAN BIAYA",
				},
			],
		},

		{
			image: logo,
			title: "INSTALASI SELEP PECAH KULIT",
			description: "Paket untuk Anda yang baru memulai bisnis.",
			benefits: [
				{
					id: 1,
					name: "GAMBAR KERJA ",
				},
				{
					id: 2,
					name: "RENCANA ANGGRAN BIAYA",
				},
			],
		},
	];

	return (
		<>
			<div name="pricing" className="w-full md:mt-24 md:mb-8 mb-32 flex flex-col md:justify-center items-center font-roboto text-center">
				<div className="flex flex-col justify-center">
					<h1 className="font-medium text-3xl md:text-4xl">Paket Jasa Layanan</h1>
					<p className="mt-10 px-5 md:text-xl">Paket jasa untuk memudahkan proses bisnis Anda.</p>
					<div className="flex md:flex-row flex-col gap-4 md:gap-20 mt-8 md:mt-16 m-auto">
						{pricings.map((pricing, id) => (
							<PricingCard key={id} image={pricing.image} title={pricing.title} description={pricing.description} features={pricing.benefits} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
