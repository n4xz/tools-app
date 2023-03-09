import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
	const [contact, setContact] = useState(false)
	const [about, setAbout] = useState(false)

	function handleContact() {
		setContact(!contact)
		setAbout(false)
	}
	function handleAbout() {
		setAbout(!about)
		setContact(false)
	}

	return (
		<footer>
			<div className='h-[1px] w-full bg-white/20'></div>
			<div className='flex items-center justify-between pt-4'>
				<div className='flex items-center gap-2'>
					<p className='hidden text-xs opacity-60 md:flex md:text-sm'>
						© 2023 - Mihai Postelnicu
					</p>
					<a
						href='https://github.com/n4xz'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithubSquare size={30} className='hover:text-orange-500' />
					</a>
					<a
						href='https://www.linkedin.com/in/mihaipostelnicu/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin size={30} className='hover:text-blue-500' />
					</a>
				</div>
				<div className='flex items-center gap-4 md:mx-0 md:gap-6'>
					<div>
						<button
							onClick={handleContact}
							className='relative opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'
						>
							Contact
						</button>
					</div>
					<AnimatePresence>
						{contact && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
								className='fixed left-1/2 bottom-[45%] min-w-[80%] -translate-x-1/2 rounded-md bg-black/95 py-6 px-4 text-center text-white shadow-2xl drop-shadow-2xl md:min-w-fit md:py-12 md:px-10'
							>
								<button
									onClick={handleContact}
									className='absolute right-3 top-1 text-xl font-extrabold'
								>
									x
								</button>
								<p className='mb-4 font-semibold'>
									You can contact me using the following methods:
								</p>
								<li>
									<a href='tel:0731692494' className='hover:underline'>
										Phone: +40 731 692 494
									</a>
								</li>
								<li>
									<a href='mailto:n4xz@icloud.com' className='hover:underline'>
										Email: n4xz@icloud.com
									</a>
								</li>
							</motion.div>
						)}
					</AnimatePresence>
					<div>
						<button
							onClick={handleAbout}
							className='py-1 px-2 opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'
						>
							About
						</button>
						<AnimatePresence>
							{about && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className='fixed left-1/2 bottom-[40%] min-w-[80%] -translate-x-1/2 rounded-md bg-black/95 py-6 px-4 text-center text-white shadow-2xl drop-shadow-2xl md:min-w-fit md:py-12 md:px-10'
								>
									<button
										onClick={handleAbout}
										className='absolute right-3 top-1 text-xl font-extrabold'
									>
										x
									</button>
									<li>
										The purpose of this website is to cover a large spectrum of
										web tools you can use when in need.{' '}
									</li>
									<li className='mt-4'>
										For new tool ideas, contact me via the contact section!
									</li>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</footer>
	)
}
