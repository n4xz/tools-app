import { motion } from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Menu({ handleMenu }) {
	return (
		<motion.div
			animate={{opacity: 1, top: 0}}
			initial={{opacity: 0, top: -200}}
			className='fixed top-0 left-0 right-0 z-20 bg-black pt-24 shadow-2xl drop-shadow-2xl'
		>
			<button onClick={handleMenu}>
				<HiOutlineX size={40} color='white' className='fixed right-6 top-4' />
			</button>
			<div className='flex flex-col items-center'>
				<div className='mb-16 h-min w-max px-4 pb-2 text-center text-5xl font-thin italic shadow outline outline-[1px]'>
					Everyday Tools
				</div>
				<span className='mt-2 mb-1 h-[1px] w-full bg-white/10'></span>
				<Link to='/todo' className='p-4'>
					Todo List
				</Link>
				<span className='mt-2 mb-1 h-[1px] w-full bg-white/10'></span>
				<Link to='/bmi' className='mb-3 mt-1 p-4'>
					BMI Calculator
				</Link>
			</div>
		</motion.div>
	)
}
