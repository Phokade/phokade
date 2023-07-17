export default function Button(props) {
	return (
		<>
			<button className={`w-fit font-medium text-[#214842] px-4 py-2 rounded-full hover:shadow-md duration-200 hover:shadow-yellow-300 bg-[#E7B10A] ${props.className}`}>{props.content}</button>
		</>
	);
}
