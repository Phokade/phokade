import React from "react";
import about1 from "/about-1.png";
import about2 from "/about-2.png";
import about3 from "/about-3.png";

function About() {
	return (
		<>
			<div>
				<div className="w-full h-screen justify-evenly items-center flex font-roboto">
					<img src={about1} />

					<div className="flex flex-col gap-10 w-[503px]">
						<h1 className="font-medium text-4xl">Pengetahuan dan Keahlian</h1>
						<p>
							Kami menawarkan tim ahli yang memiliki pengetahuan yang mendalam dan keahlian di bidang perencanaan arsitektur. Kami memiliki pengalaman yang luas dalam mengelola berbagai jenis proyek arsitektur, mulai perencanaan desain
							bangunan hingga perencanaan arsitektur di bidang agrikultur . Keunggulan ini akan memberi Anda kepercayaan diri bahwa Anda akan menerima layanan profesional yang berkualitas tinggi dari kami.
						</p>
					</div>
				</div>

				<div className="w-full h-screen justify-evenly items-center flex font-roboto">
					<div className="flex flex-col gap-10 w-[503px]">
						<h1 className="font-medium text-4xl">Solusi yang Disesuaikan</h1>
						<p>
							Kami memahami bahwa setiap proyek arsitektur memiliki kebutuhan yang unik. Oleh karena itu, kami menawarkan solusi yang disesuaikan dengan kebutuhan dan tujuan Anda. Kami akan bekerja sama dengan Anda untuk merancang rencana
							yang tepat, mengidentifikasi tantangan yang mungkin muncul, dan memberikan solusi yang efektif dan efisien. Dengan pendekatan yang personal dan solusi yang disesuaikan, Anda dapat yakin bahwa proyek Anda akan diurus dengan
							baik.
						</p>
					</div>
					<img src={about2} />
				</div>

				<div className="w-full h-screen justify-evenly items-center flex font-roboto">
					<img src={about3} />
					<div className="flex flex-col gap-10 w-[503px]">
						<h1 className="font-medium text-4xl">Pemakaian Teknologi Terkini</h1>
						<p>
							Kami terus mengikuti perkembangan teknologi terkini dalam industri arsitektur. Kami menggunakan peralatan dan teknik modern untuk meningkatkan efisiensi dan produktivitas dalam setiap proyek. Dari penggunaan perangkat lunak
							yang yang canggih hingga perencanaan instalasi, kami memastikan bahwa Anda mendapatkan manfaat dari kemajuan teknologi terbaru untuk meningkatkan kualitas dari proyek arsitektur Anda. Dengan pendekatan yang inovatif dan
							teknologi terkini, kami memberikan keunggulan kompetitif yang akan membantu Anda mencapai keberhasilan dalam proyek arsitektur Anda.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
