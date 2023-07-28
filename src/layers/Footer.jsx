import logo from "/public/logo.png";
import facebook from "/public/facebook.png";
import instagram from "/public/instagram.png";
import tokopedia from "/public/tokopedia.png";
import IconOutline from "../components/IconOutline";
import { Link } from "react-scroll";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const icons = [
		{
			href: "https://www.facebook.com",
			img: facebook,
			iconClassName: "w-[24px]",
			className: "p-[10px]",
		},
		{
			href: "https://instagram.com/phokade.id/",
			img: instagram,
		},
		{
			href: "https://www.tokopedia.com/phokade-an",
			img: tokopedia,
		},
	];

	return (
		<>
			<div className="w-full mt-24 justify-center items-center font-roboto ">
				<div className="flex justify-center items-center md:gap-16 gap-8 font-medium flex-col md:flex-row">
					<Link activeClass="active" to="hero" className=" cursor-pointer" spy={true} smooth={true} duration={500}>
						<img src={logo} alt="" className="mix-blend-multiply" />
					</Link>
					<Link activeClass="active" to="about" className=" cursor-pointer" spy={true} smooth={true} duration={500}>
						Tentang
					</Link>
					<Link activeClass="active" to="pricing" className=" cursor-pointer" spy={true} smooth={true} duration={500}>
						Pricing
					</Link>
					<Link activeClass="active" to="contact" className=" cursor-pointer" spy={true} smooth={true} duration={500}>
						Contact
					</Link>
				</div>
				<div className="border border-green-500 mt-12 mx-44"></div>
				<div className="flex justify-center items-center gap-8 mt-12">
					{icons.map((icon, id) => (
						<IconOutline key={id} href={icon.href} icon={icon.img} className={icon.className} iconClassName={icon.iconClassName} />
					))}
				</div>
				<div className="flex md:flex-row flex-col-reverse justify-center items-center font-roboto mt-12 mb-12 gap-8">
					<p>Copyrights © {currentYear} Phokade</p>
					<p>Privacy — Terms</p>
				</div>
			</div>
		</>
	);
}
