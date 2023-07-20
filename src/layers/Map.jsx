export default function Map() {
	return (
		<>
			<div className="w-full mb-40 flex justify-center items-center font-roboto ">
				<div className="flex">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.0987931172517!2d113.67678471478214!3d-8.39194359396432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjMnMzEuMCJTIDExM8KwNDAnNDQuMyJF!5e0!3m2!1sid!2sid!4v1689720026341!5m2!1sid!2sid"
						width={900}
						height={450}
						style={{ border: 0 }}
						loading="lazy"
						//referrerpolicy="no-referrer-when-downgrade"
					></iframe>
					<div className=" ml-12 my-auto ">
						<h1 className="text-2xl font-medium">Ingin berkunjung ke tempat kami?</h1>
						<p className="mt-4">
							Dsn. Kraton Ds. Wonoasri <br />
							RT/RW 006/001 Kecamatan Tempurejo <br />
							Kabupaten Wonoasri
						</p>
						<p className="mt-4">
							<span className="font-medium">Senin - Sabtu</span> : 07.00 - 20.00 WIB
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
