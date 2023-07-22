import React from "react";
import { IoLogoWhatsapp, IoIosSend } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import ContactCard from "../components/ContactCard";
const contacts = [
	{
		id: 1,
		contact: (
			<>
				<IoLogoWhatsapp size={35} className="text-[#214842]" />
			</>
		),
		title: "Whatsapp",
		data: "(+62) 813 5860 9474",
		href: "https://wa.me/6281358609474",
	},
	{
		id: 2,
		contact: (
			<>
				<BsFacebook size={35} className="text-[#214842]" />
			</>
		),
		title: "Facebook",
		data: "PHOKADE AN",
		href: "https://www.facebook.com",
	},
	{
		id: 3,
		contact: (
			<>
				<IoIosSend size={35} className="text-[#214842]" />
			</>
		),
		title: "Email",
		data: "phokadean@gmail.com",
		href: "mailto:phokadean@gmail.com",
	},
];
function Contact() {
	return (
		<>
			<div name="contact" className="w-full h-screen flex justify-center items-center font-roboto text-center">
				<div className="flex flex-col px-10">
					<h1 className="font-bold text-2xl md:text-3xl">Anda siap memulai bisnis?</h1>
					<p className="mt-10 text-sm md:text-xl">“Hidup bukan tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan diri Anda sendiri.”</p>
					<p className="mt-10 text-xl">― George Bernard Shaw ―</p>
					<div className="flex flex-col lg:flex-row gap-10 mt-10 mb-20 lg:mb-0">
						{contacts.map((contact) => (
							<a key={contact.id} href={contact.href}>
								<ContactCard contact={contact.contact} title={contact.title} data={contact.data} />
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
