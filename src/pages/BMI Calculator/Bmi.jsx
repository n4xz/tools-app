import React from 'react'
import Navbar from '../Todo List/components/Navbar'
import Main from './components/Main'

const Bmi = () => {
	return (
		<>
			<div className='h-screen w-screen bg-black text-white'>
				<div className='h-screen w-screen overflow-scroll bg-gradient-to-b from-sky-500 to-teal-500 px-8 pb-32'>
					<Navbar />
					<Main />
				</div>
			</div>
		</>
	)
}

export default Bmi
