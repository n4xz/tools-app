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
				className='h-screen w-screen overflow-scroll bg-gradient-to-t from-rose-500/50 to-red-500/90 px-4'
			>
				<Navbar />
				<Main />
			</motion.div>
		</div>
	)
}
