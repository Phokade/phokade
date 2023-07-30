//import React from "react";

function CompanyCard(props) {
	return (
		<>
			<div className="w-[150px] md:w-[196px] h-[100px] border border-gray-400 flex justify-center py-2">
				<img src={props.image} className=" mix-blend-multiply" />
			</div>
		</>
	);
}

export default CompanyCard;
