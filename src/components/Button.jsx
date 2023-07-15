import React from "react";

function Button(props) {
	return (
		<>
			<button className="w-fit inline-block font-semibold text-[#214842] px-3 py-3 rounded-full hover:shadow-lg duration-200 hover:shadow-yellow-300 bg-[#E7B10A]">{props.content}</button>
		</>
	);
}

export default Button;
