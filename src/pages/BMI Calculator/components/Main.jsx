import { useEffect, useState } from 'react'
import Empty from './Empty'

const Main = () => {
	const [weight, setWeight] = useState()
	function handleWeight(event) {
		setWeight(event.target.value)
	}
	const [height, setHeight] = useState()
	function handleHeight(event) {
		setHeight(event.target.value)
	}

	const [bmi, setBmi] = useState()
	function handleBmi() {
		setBmi((weight / (height / 100) ** 2).toFixed(2))
	}

	const [health, setHealth] = useState('')

	function isUnderweight() {
		setHealth('You are underweight.')
	}
	function isHealthy() {
		setHealth('You are a healthy individual!')
	}
	function isOverweight() {
		setHealth('You are overweight.')
	}
	function handleHealth() {
		if (bmi < 19) {
			isUnderweight()
		} else if (bmi > 19 && bmi < 25) {
			isHealthy()
		} else if (bmi > 25) {
			isOverweight()
		}
	}
	useEffect(() => {
		handleHealth()
	})

	return (
		<div>
			<div className='mx-auto mt-20 md:mt-64 flex flex-col items-center rounded-md bg-gradient-to-br from-black/20 to-black/20 px-8 pt-8 pb-8 shadow-2xl md:max-w-[500px]'>
				<h2 className='mb-6 text-2xl font-semibold'>BMI Calculator</h2>
				<div className='mb-5 min-w-full'>
					<p>Your weight (kilograms):</p>
					<input
						onChange={handleWeight}
						className='mt-2 min-w-full rounded-md bg-black/30 py-2 pl-2 placeholder-white/40 drop-shadow-xl placeholder:text-sm'
						type='number'
						placeholder='Example: 70kg'
					/>
				</div>
				<div className='mb-5 min-w-full'>
					<p>Your height (centimeters):</p>
					<input
						onChange={handleHeight}
						className='mt-2 min-w-full rounded-md bg-black/30 py-2 pl-2 placeholder-white/40 drop-shadow-xl placeholder:text-sm'
						type='number'
						placeholder='Example: 180cm'
					/>
				</div>
				<button className='duration-400 mb-4 min-w-full rounded-md border px-4 py-2 ease-in-out active:bg-white active:text-black active:transition-all'>
					Reset
				</button>
				<button
					onClick={handleBmi}
					className='min-w-full rounded-md bg-white/30 px-4 py-2 ease-in-out active:bg-white active:text-black active:transition-all'
				>
					Submit
				</button>
				<div className='flex flex-col items-center text-xs'></div>
				<div>
					{isNaN(bmi) ? (
						<Empty />
					) : (
						<>
							<p className='mt-4 text-center text-xl font-semibold'>{health}</p>
							<p className='mt-4 text-center text-2xl'>
								Your BMI is: <b>{bmi}</b>
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Main
