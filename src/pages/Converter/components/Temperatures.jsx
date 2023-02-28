export default function Temperatures() {
	const temperatureOptions = ['Fahrenheit', 'Celsius', 'Kelvin']
	return (
		<>
			{temperatureOptions.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</>
	)
}
