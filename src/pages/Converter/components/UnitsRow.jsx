import React from 'react'

const UnitsRow = (props) => {
	const {
		lengthValues,
		value,
		handleValueChange,
		handleUnitChange,
		selectedUnit
	} = props
	return (
		<div className='flex flex-col'>
			<input
				value={value}
				onChange={handleValueChange}
				type='number'
				className='rounded-t-md bg-black/20 px-4 py-4 focus:outline-none'
			/>
			<select
				value={selectedUnit}
				onChange={handleUnitChange}
				className='rounded-b-md border-t bg-black/20 p-2 text-sm focus:outline-none'
			>
				{Object.keys(lengthValues).map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

export default UnitsRow
