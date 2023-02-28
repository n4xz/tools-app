import { motion } from 'framer-motion'
import Navbar from '../Todo List/components/Navbar'
import Main from './components/Main'

export default function Converter() {
	return (
		<div className='h-screen w-screen bg-black'>
			<motion.div
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className='h-screen w-screen overflow-scroll bg-gradient-to-tl from-[#404348] via-[#c89c76]/70 to-[#c26c49] px-4'
			>
				<Navbar />
				<Main />
			</motion.div>
		</div>
	)
}
