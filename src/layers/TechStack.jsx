//import React from "react";
import imgGallery from "/img-gallery.png";

export default function TechStack() {
	return (
		<>
			<div className="w-full h-[600px] flex justify-center items-center font-roboto">
				<div className="flex flex-col font-roboto text-center gap-8 md:gap-12 px-5">
					<h1 className="text-3xl md:text-4xl font-medium">ALAT PENDUKUNG INSTALASI</h1>
					<p className="md:text-2xl leading-none text-sm">Menyediakan Alat Pendukung Penggilingan Padi!</p>
					<div className="grid md:grid-cols-4 grid-cols-2 gap-4">
						{[1, 2, 3, 4].map((i) => (
							<img key={i} src={imgGallery} alt="" />
						))}
					</div>
					<div className="border border-gray-400 mx-16"></div>
				</div>
			</div>
		</>
	);
}
