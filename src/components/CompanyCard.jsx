import React from "react";

function CompanyCard(props) {
	return (
		<>
			<div className="w-[196px] h-[100px] border border-gray-400 flex justify-center py-2">
				<img src={props.image} />
			</div>
		</>
	);
}

export default CompanyCard;
