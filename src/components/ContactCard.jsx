//import React from "react";
function ContactCard(props) {
	return (
		<>
			<div className="w- lg:w-[363px] border border-gray-400 flex items-center justify-center px-14 py-5 rounded-md hover:shadow-lg duration-200 hover:shadow-yellow-300">
				<div className="flex flex-col items-center gap-3">
					{props.contact}
					<div>
						<h1 className="text-lg font-semibold">{props.title}</h1>
						<p className="text-md text-gray-400 font-medium">{props.data}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactCard;
