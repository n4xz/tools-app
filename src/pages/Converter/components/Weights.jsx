export default function Weights() {
	const weightOptions = [
		'Metric tons',
		'Kilograms',
		'Grams',
		'Miligrams',
		'Micrograms',
		'Stones',
		'Pounds',
		'Ounces'
	]
	return (
		<>
			{weightOptions.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</>
	)
}
