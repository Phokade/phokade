import React from "react";
function ContactCard(props) {
	return (
		<>
			<div className="w-[363px] border border-gray-400 flex items-center justify-center px-14 py-5 rounded-md">
				<div className="flex flex-col items-center gap-2">
					{props.contact}
					<h1 className="text-lg font-semibold">{props.title}</h1>
					<p className="text-md text-gray-400 font-medium">{props.data}</p>
				</div>
			</div>
		</>
	);
}

export default ContactCard;
