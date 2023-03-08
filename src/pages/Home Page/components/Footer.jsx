import { motion } from 'framer-motion'
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
					{contact && (
						<motion.div
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							transition={{ duration: 0.8 }}
							className='fixed left-1/2 bottom-[30%] min-w-[80%] -translate-x-1/2 rounded-md bg-white py-6 px-4 text-center text-cyan-900 shadow-2xl drop-shadow-2xl md:min-w-fit md:py-12 md:px-10'
						>
							<p className='mb-4 font-semibold'>
								You can contact me using the following methods:
							</p>
							<li>
								<a href='tel:0731692494' className='hover:underline'>
									Phone: +40 73 169 2494
								</a>
							</li>
							<li>
								<a href='mailto:n4xz@icloud.com' className='hover:underline'>
									Email: n4xz@icloud.com
								</a>
							</li>
						</motion.div>
					)}
					<div>
						<button
							onClick={handleAbout}
							className='py-1 px-2 opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'
						>
							About
						</button>
						{about && (
							<motion.div
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								transition={{ duration: 0.8 }}
								className='fixed left-1/2 bottom-[30%] min-w-[80%] -translate-x-1/2 rounded-md bg-white py-6 px-4 text-center text-cyan-900 shadow-2xl drop-shadow-2xl md:min-w-fit md:py-12 md:px-10'
							>
								<li>
									The purpose of this website is to cover a large spectrum of
									web tools you can use when in need.{' '}
								</li>
								<li className='mt-4'>
									For new tool ideas, contact me via the contact section!
								</li>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</footer>
	)
}
