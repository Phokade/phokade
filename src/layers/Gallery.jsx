import imgGallery from "/img-gallery.png";

export default function Companies() {
	return (
		<>
			<div className="w-full h-[200px] flex justify-center items-center font-roboto">
				<div className="flex flex-col font-roboto text-center gap-16">
					<h1 className="text-4xl font-medium">Gallery</h1>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-4 mx-12 mb-12">
				<div className="col-span-4 row-span-1">
					<img src={imgGallery} className="mb-4 rounded-lg" />
					<img src={imgGallery} className="rounded-lg" />
				</div>
				<div className="col-span-5 row-span-1">
					<div className="grid-cols-2 grid gap-4 h-[48.7%] mb-4">
						<img src={imgGallery} className="rounded-lg object-cover h-full" />
						<img src={imgGallery} className="rounded-lg object-cover h-full" />
					</div>
					<img src={imgGallery} className="object-cover rounded-lg h-[48.3%] w-full" />
				</div>
				<div className="row-span-1 col-span-3">
					<img src={imgGallery} className="object-cover h-full rounded-lg" />
				</div>
			</div>
		</>
	);
}
