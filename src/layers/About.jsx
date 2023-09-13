//import React from "react";
import about1 from "/about-1.png";
import about2 from "/about-2.png";
import about3 from "/about-3.png";

function About() {
	return (
		<>
			<div name="about">
				<div className="w-full h-screen justify-evenly items-center flex flex-col lg:flex-row font-roboto">
					<img src={about1} className="w-3/4 md:w-1/3" />

					<div className="flex flex-col gap-10 px-5 lg:w-[503px]">
						<h1 className="font-medium text-4xl">Instalasi Dryer dan Tungku</h1>
						<p>
							Perencanaan Dryer dan Tungku adalah Instalasi Tahap awal Pengeringan Gabah Kering Sawah (KS) sampai kering dengan kadar air yang disesuaikan randoman Gabah,
							Perencanaan Instalasi dengan kelebihan 99,9% Tanpa abu polusi dengan desaign filter abu dan ruang abu sesuai kapasitas. 
							dalam perencaan instlasi dryer dan tungku dengan tujuan memaksimalkan ruangan dan lahan, memperkecil resiko limbah, bising, abu/debu.

						</p>
					</div>
				</div>

				<div className="w-full justify-evenly items-center flex flex-col-reverse lg:flex-row font-roboto">
					<div className="flex flex-col gap-10 px-5 lg:w-[503px]">
						<h1 className="font-medium text-4xl">Instalasi Sellep Padi/Pecah Kulit</h1>
						<p>
							Instalasi Selep Padi/Pecah Kulit adalah Instalasi utama dalam proses Gabah menjadi beras dengan cara kerja mengupas beras dari kulitnya.
							Kami memahami bahwa setiap proyek arsitektur memiliki kebutuhan yang unik. Oleh karena itu, kami menawarkan solusi yang disesuaikan dengan kebutuhan dan tujuan Anda. 
							Kami akan bekerja sama dengan Anda untuk merancang rencana
						</p>
					</div>
					<img src={about2} className="w-3/4 md:w-1/3 mb-10 lg:mb-0" />
				</div>

				<div className="w-full justify-evenly items-center flex flex-col lg:flex-row font-roboto md:mt-44">
					<img src={about3} className="w-3/4 md:w-1/3 my-10" />
					<div className="flex flex-col gap-10 px-5 lg:w-[503px]">
						<h1 className="font-medium text-4xl">Instalasi Kibi dan Colour Sorter</h1>
						<p>
							Instalasi Kibi dan Colour Sorter adalah pendukung instalasi dalam instalasi selep dengan cara kerja untuk memisahkan beras dari kulit arinya atau dedak 
							sehingga akan dihasilkan beras yang lebih bersih dan lebih putih, 
							dengan tujuan untuk meningkatkan nilai jual beras yang digiling. 
							
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
