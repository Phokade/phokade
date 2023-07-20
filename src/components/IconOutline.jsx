export default function IconOutline(props) {
	return (
		<a className={`border rounded-full border-green-500 p-3 cursor-pointer hover:shadow-md duration-200 hover:shadow-yellow-300 ${props.className}`} href={props.href}>
			<img src={props.icon} alt="" className={props.iconClassName} />
		</a>
	);
}
