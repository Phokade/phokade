//import React from "react";
import { BiSolidCircle } from "react-icons/bi";

function PricingCard({ image, title, description, features }) {
	return (
		<>
			<div className="flex flex-col gap-2 justify-center items-center w-[270px] border border-black p-9 rounded-lg ">
				<img src={image} alt="" className="mix-blend-multiply" />
				<h1 className="text-lg font-medium capitalize">{title}</h1>
				<p className="text-sm">{description}</p>
				<ul className="text-gray-600">
					{/* Mapping array of feature */}
					{features.map((feature) => (
						<li key={feature.id} className="mt-3 flex gap-2">
							<BiSolidCircle size={5} className="my-auto" />
							{feature.name}
						</li>
					))}
				</ul>
				<button className="w-fit py-2 px-10 rounded-lg hover:bg-yellow-500 duration-200 mt-16 border border-black hover:border-none hover:text-[#214842]">Beli Paket</button>
			</div>
		</>
	);
}

export default PricingCard;
