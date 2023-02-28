import { useEffect, useState } from 'react'
import Lengths from './Lengths'
import Temperatures from './Temperatures'
import Weights from './Weights'

export default function Main() {

	const [category, setCategory] = useState('')
	function handleCategory(event) {
		setCategory(event.target.value)
  }
  


	return (
		<>
			<div className='mx-auto mt-20 flex flex-col items-center rounded-md bg-gradient-to-br from-black/20 to-black/10 px-8 pt-12 pb-56 text-white shadow-2xl md:mt-64 md:max-w-[500px]'>
				<h2 className='mb-6 text-center text-3xl font-semibold'>
					Multi-converter
				</h2>
				<select
					className='mb-4 w-52 rounded-md bg-black/20 px-2 py-2 focus:outline-none md:w-full'
					name='Category'
					onChange={handleCategory}
				>
					<option value=''>Choose a category...</option>
					<option value='length'>Length</option>
					<option value='weight'>Weight</option>
					<option value='temperature'>Temperature</option>
				</select>
				{category === '' ? (
					<p className='mb-4 text-sm'>
						Please choose the category you want to use.
					</p>
				) : (
					<p className='mb-4 text-sm'>Here is your {category} conversion:</p>
				)}
				<div className='grid w-fit align-middle md:grid-cols-3'>
					<div className='flex flex-col'>
						<input
              type='number'
							className='rounded-t-md bg-black/20 px-4 py-4 placeholder:text-xs placeholder:text-white/20 focus:outline-none'
						/>
						<select
							name='firstSelect'
							id='firstSelect'
							className='rounded-b-md border-t bg-black/20 p-2 text-sm focus:outline-none'
						>
							{category === 'length' && <Lengths />}
							{category === 'weight' && <Weights />}
							{category === 'temperature' && <Temperatures />}
						</select>
					</div>
					<span className='mx-auto text-3xl md:translate-y-2'>=</span>
					<div className='flex flex-col'>
            <input
              type='number'
							className='rounded-t-md bg-black/20 px-4 py-4 placeholder:text-xs placeholder:text-white/20 focus:outline-none'
						/>
						<select
							name='secondSelect'
							id='secondSelect'
							className='rounded-b-md border-t bg-black/20 p-2 text-sm focus:outline-none'
						>
							{category === 'length' && <Lengths />}
							{category === 'weight' && <Weights />}
							{category === 'temperature' && <Temperatures />}
						</select>
					</div>
				</div>
			</div>
		</>
	)
}
