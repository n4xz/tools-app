export default function Lengths() {
	const lengthOptions = [
		'Kilometre',
		'Meter',
		'Centimeter',
		'Milimetre',
		'Mile',
		'Yard',
		'Foot',
		'Inch'
	]
	return (
		<>
			{lengthOptions.map((option) => (
        <option key={option} value={option}>{option}</option>
			))}
		</>
	)
}
