import { Link } from 'react-router-dom'

export default function LinkElement(props) {
	const { path, name } = props

	return (
		<>
			<Link
				to={path}
				className='transition-transform duration-200 hover:scale-110'
			>
				{name}
			</Link>
		</>
	)
}
