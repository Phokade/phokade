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
			href: "https://www.instagram.com",
			img: instagram,
		},
		{
			href: "https://www.tokopedia.com",
			img: tokopedia,
		},
	];

	return (
		<>
			<div className="w-full mt-24 justify-center items-center font-roboto ">
				<div className="flex justify-center items-center gap-16 font-medium">
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
				<div className="flex justify-center items-center font-roboto mt-12 mb-8 gap-8">
					<p>Copyrights © {currentYear} Phokade</p>
					<p>Privacy — Terms</p>
				</div>
			</div>
		</>
	);
}
