//import React from "react";
import { BiSolidCircle } from "react-icons/bi";

function PricingCard({ image, title, description, features }) {
	return (
		<>
			<div className="flex flex-col gap-2 justify-center w-[300px] px-8 border border-black p-9 rounded-lg ">
				<div className="w-full justify-center flex">
					<img src={image} alt="" className="w-[64px] h-[80px]" />
				</div>
				<h1 className="text-lg font-medium capitalize">{title}</h1>
				<p className="text-sm">{description}</p>
				<ul className="text-gray-600 mt-3">
					{/* Mapping array of feature */}
					{features.map((feature) => (
						<li key={feature.id} className="flex gap-2 text-left">
							<BiSolidCircle size={5} className="my-auto" />
							{feature.name}
						</li>
					))}
				</ul>
				<a
					href={`https://wa.me/6281358609474?text=Halo%0A%0ASaya ingin memesan jasa paket ${title}%0A%0ATerima kasih`}
					target={"_blank"}
					className="w-full py-2 md:px-10 px-8 rounded-lg hover:bg-yellow-500 duration-200 mt-16 border border-black hover:border-slate-200 hover:text-[#214842]"
				>
					Beli Paket
				</a>
			</div>
		</>
	);
}

export default PricingCard;
