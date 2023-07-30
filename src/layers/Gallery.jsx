import imgGallery from "/img-gallery.png";

export default function Companies() {
	return (
		<>
			<div className="w-full h-[200px] flex justify-center items-center font-roboto">
				<div className="flex flex-col font-roboto text-center">
					<h1 className="text-4xl font-medium">Gallery</h1>
				</div>
			</div>
			<div className="grid grid-cols-12 md:gap-4 gap-2 md:mx-12 mx-2 mb-12">
				<div className="col-span-4 row-span-1">
					<img src={imgGallery} className="md:mb-4 mb-2 rounded-lg" />
					<img src={imgGallery} className="rounded-lg" />
				</div>
				<div className="col-span-5 row-span-1">
					<div className="grid-cols-2 grid md:gap-4 gap-2 md:h-[48.7%] h-[46.5%] md:mb-4 mb-2">
						<img src={imgGallery} className="rounded-lg object-cover h-full" />
						<img src={imgGallery} className="rounded-lg object-cover h-full" />
					</div>
					<img src={imgGallery} className="object-cover rounded-lg md:h-[48.3%] h-[47%] w-full" />
				</div>
				<div className="row-span-1 col-span-3">
					<img src={imgGallery} className="object-cover h-full rounded-lg" />
				</div>
			</div>
		</>
	);
}
