import imgGallery from "/img-gallery.png";

export default function Companies() {
	return (
		<>
			<div className="w-full h-[200px] flex justify-center items-center font-roboto">
				<div className="flex flex-col font-roboto text-center gap-16">
					<h1 className="text-4xl font-medium">Gallery</h1>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 mx-12 mb-12">
				<div className="">
					<img src={imgGallery} className="mb-4" />
					<img src={imgGallery} />
				</div>
				<div>
					<div className="grid-cols-2 grid h-1/2 gap-4 mb-2">
						<img src={imgGallery} className="max-w-full object-cover h-full" />
						<img src={imgGallery} className="max-w-full object-cover h-full" />
					</div>
					<img src={imgGallery} />
				</div>
				<div className="row-span-1">
					<img src={imgGallery} className="object-cover h-full" />
				</div>
			</div>
		</>
	);
}
