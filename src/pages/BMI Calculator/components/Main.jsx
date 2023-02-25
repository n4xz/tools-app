import { useEffect, useState } from 'react'
import { ReactComponent as Normal } from './bodies/normal.svg'
import { ReactComponent as Over } from './bodies/overweight.svg'
import { ReactComponent as Under } from './bodies/underweight.svg'
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
	const [under, setUnder] = useState(false)
	const [normal, setNormal] = useState(false)
	const [over, setOver] = useState(false)

	function isUnderweight() {
		setHealth('You are underweight.')
		setUnder(true)
		setNormal(false)
		setOver(false)
	}
	function isHealthy() {
		setHealth('You are a healthy individual!')
		setUnder(false)
		setNormal(true)
		setOver(false)
	}
	function isOverweight() {
		setHealth('You are overweight.')
		setUnder(false)
		setNormal(false)
		setOver(true)
	}
	function handleHealth() {
		if (bmi < 18.5) {
			isUnderweight()
		} else if (bmi > 18.5 && bmi < 25) {
			isHealthy()
		} else if (bmi > 25) {
			isOverweight()
		}
	}
	function handleReset() {
		setBmi()
		setWeight('')
		setHeight('')
	}
	useEffect(() => {
		handleHealth()
	})

	return (
		<div>
			<div className='mx-auto mt-20 flex flex-col items-center rounded-md bg-gradient-to-br from-black/20 to-black/20 px-8 pt-8 pb-8 shadow-2xl md:mt-64 md:max-w-[500px]'>
				<h2 className='mb-6 text-2xl font-semibold'>BMI Calculator</h2>
				<div className='mb-5 min-w-full'>
					<p>Your weight (kilograms):</p>
					<input
						onChange={handleWeight}
						value={weight}
						className='mt-2 min-w-full rounded-md bg-black/30 py-2 pl-2 placeholder-white/40 drop-shadow-xl placeholder:text-sm'
						type='number'
						placeholder='Example: 70kg'
					/>
				</div>
				<div className='mb-5 min-w-full'>
					<p>Your height (centimeters):</p>
					<input
						onChange={handleHeight}
						value={height}
						className='mt-2 min-w-full rounded-md bg-black/30 py-2 pl-2 placeholder-white/40 drop-shadow-xl placeholder:text-sm'
						type='number'
						placeholder='Example: 180cm'
					/>
				</div>
				<button
					onClick={handleReset}
					className='duration-400 mb-4 min-w-full rounded-md border px-4 py-2 ease-in-out active:bg-white active:text-black active:transition-all'
				>
					Reset
				</button>
				<button
					onClick={handleBmi}
					className='mb-5 min-w-full rounded-md bg-white/30 px-4 py-2 ease-in-out active:bg-white active:text-black active:transition-all'
				>
					Submit
				</button>
				<div className='flex flex-col items-center text-xs'></div>
				<div>
					{isNaN(bmi) ? (
						<Empty />
					) : (
						<>
							<p className='text-center text-3xl'>
								Your BMI is: <b>{bmi}</b>
							</p>
							<div className='flex justify-center'>
								{under && <Under />}
								{normal && <Normal />}
								{over && <Over />}
							</div>
							<p className='text-center text-2xl font-semibold'>{health}</p>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Main
