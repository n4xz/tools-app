import { useEffect, useState } from 'react'
import UnitsRow from './UnitsRow'

export default function Main() {
	const lengthValues = {
		Kilometre: 1000,
		Meter: 1,
		Centimeter: 0.01,
		Milimetre: 0.001,
		Mile: 1609.344,
		Yard: 0.9144,
		Foot: 0.3048,
		Inch: 0.0254
	}

	const [inputValue, setInputValue] = useState(0)
	const [outputValue, setOutputValue] = useState(0)
	const [inputUnit, setInputUnit] = useState('Meter')
	const [outputUnit, setOutputUnit] = useState('meters')

	useEffect(() => {
		convert()
	}, [inputValue, inputUnit, outputUnit])

	function convert() {
		const inputInMeters = inputValue * lengthValues[inputUnit]
		const outputInMeters = inputInMeters / lengthValues[outputUnit]
		setOutputValue(outputInMeters)
	}

	const handleInputValueChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleOutputValueChange = (event) => {
		setOutputValue(event.target.value)
	}

	const handleInputUnitChange = (event) => {
		setInputUnit(event.target.value)
	}

	const handleOutputUnitChange = (event) => {
		setOutputUnit(event.target.value)
	}

	return (
		<>
			<div className='mx-auto mt-20 flex max-w-[500px] flex-col items-center rounded-md bg-gradient-to-br from-black/20 to-black/10 px-8 py-12 text-white shadow-2xl md:mt-64'>
				<h2 className='mb-6 text-center text-3xl font-semibold'>
					Length converter
				</h2>
				<p className='mb-4 text-sm'>Here is your length conversion:</p>
				<div className='mb-8 grid align-middle md:grid-cols-3'>
					<UnitsRow
						value={inputValue}
						handleValueChange={handleInputValueChange}
						lengthValues={lengthValues}
						selectedUnit={inputUnit}
						handleUnitChange={handleInputUnitChange}
					/>

					<div className='flex items-center justify-evenly py-4 md:flex-col md:py-0'>
						<span className='text-3xl md:-translate-y-5'>=</span>
					</div>

					<UnitsRow
						value={outputValue}
						handleValueChange={handleOutputValueChange}
						lengthValues={lengthValues}
						selectedUnit={outputUnit}
						handleUnitChange={handleOutputUnitChange}
					/>
				</div>
			</div>
		</>
	)
}
