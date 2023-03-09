import { motion } from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi'
import LinkElement from './LinkElement'

export default function Menu({ handleMenu }) {
	return (
		<motion.div
			initial={{ opacity: 0, top: -200 }}
			animate={{ opacity: 1, top: 0 }}
			exit={{ opacity: 0, top: -200 }}
			className='fixed top-0 left-0 right-0 z-20 rounded-b-3xl bg-black/95 pt-24 shadow-2xl drop-shadow-2xl'
		>
			<button onClick={handleMenu}>
				<HiOutlineX size={40} color='white' className='fixed right-6 top-4' />
			</button>
			<div className='flex flex-col items-center px-8 pb-8'>
				<div className='mb-16 h-min w-max px-4 pt-3 pb-4 text-center text-5xl font-thin italic shadow outline outline-[0.8px]'>
					Everyday Tools
				</div>
				<div className='flex w-full flex-col gap-3 text-center'>
					<LinkElement path='/todo' name='Todo List' />
					<span className='h-[0.8px] w-full bg-white/20' />
					<LinkElement path='/bmi' name='BMI Calculator' />
					<span className='h-[0.8px] w-full bg-white/20' />
					<LinkElement path='/converter' name='Length converter' />
				</div>
			</div>
		</motion.div>
	)
}
