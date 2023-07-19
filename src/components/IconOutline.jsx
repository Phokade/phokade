export default function IconOutline(props) {
	return (
		<a className={`border rounded-full border-green-500 p-3 cursor-pointer ${props.className}`} href={props.href}>
			<img src={props.icon} alt="" className={props.iconClassName} />
		</a>
	);
}
