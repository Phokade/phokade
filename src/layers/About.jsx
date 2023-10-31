//import React from "react";
import about1 from "/DRYER A.jpg";
import about2 from "/SELLEP PREMIUM.jpg";
import about3 from "/KIBI DAN CS.jpg";
import about4 from "/GALERYA.jpg";
import about5 from "/HAMMERMILL.jpg";
function About() {
	return (
		<>
			<div name="about">
				<div className="w-full justify-evenly items-center flex flex-col-reverse lg:flex-row font-roboto">
					<div className="flex flex-col gap-10 px-5 lg:w-[503px]">
						<h1 className="font-medium text-4xl">Instalasi Cleaner</h1>
						<p>
							
						</p>
					</div>
					<img src={about4} className="w-3/4 md:w-1/3 mb-10 lg:mb-0" />
				</div>
				
				<div className="w-full h-screen justify-evenly items-center flex flex-col lg:flex-row font-roboto">
					<img src={about1} className="w-3/4 md:w-1/3" />

					<div className="flex flex-col gap-10 px-5 lg:w-[503px]">
						<h1 className="font-medium text-4xl">Instalasi Dryer dan Tungku</h1>
						<p>
							Perencanaan Dryer dan Tungku adalah Instalasi Tahap awal Pengeringan Gabah Kering Sawah (KS) sampai kering dengan kadar air yang disesuaikan randoman Gabah,
							Kelebihan Perencanaan Phokadean :
							1. Desaign tata ruang mesin yang fleksibel dalam mempermudah perawatan, operasional in/out bahan
							2. Mengurangi 99,9% resiko Polusi, debu, abu arang
							3. mengembangkan daya maksimal gabah dryer
						</p>
					</div>
				</div>

				<div className="w-full justify-evenly items-center flex flex-col-reverse lg:flex-row font-roboto">
					<div className="flex flex-col gap-10 px-5 lg:w-[503px]">
						<h1 className="font-medium text-4xl">Instalasi Sellep Padi/Pecah Kulit</h1>
						<p>
							Instalasi Selep Padi/Pecah Kulit adalah Instalasi utama dalam proses Gabah menjadi beras dengan cara kerja mengupas beras dari kulitnya.
							Kelebihan Perencaan Phokadean :
							1. Memperkecil kapasitas banyak Gabah yang ikut dalam pembuangan sekam
							2. Tata letak mesin yang kompleks dalam penggilingan padi mempermudah dalam perawatan dan pengoperasian mesin
							3. Memaksimalkan kapasitas Gabah Yang di hasilkan oleh mesin pecah kulit (PK)
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
							sehingga akan dihasilkan beras yang lebih bersih dan lebih putih, dengan tujuan untuk meningkatkan nilai jual beras yang digiling.
							Kelebihan Perencanaan Phokadean :
							1. Desain Tata ruang Mesin finishing beras medium dan premium yang berkualitas
							2. Mengurangi resiko patah beras, beras berabu, 
							3. Dapat Mengontrol kualitas dan quantitas hasil beras
						</p> 
					</div>
				</div>

				<div className="w-full justify-evenly items-center flex flex-col-reverse lg:flex-row font-roboto">
					<div className="flex flex-col gap-10 px-5 lg:w-[503px]">
						<h1 className="font-medium text-4xl">Konstruksi Struktur Baja</h1>
						
					</div>
					<img src={about5} className="w-3/4 md:w-1/3 mb-10 lg:mb-0" />
				</div>
			</div>
		</>
	);
}

export default About;
