import { useState } from 'react'

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
				<p className='hidden text-xs opacity-60 md:flex md:text-sm'>
					© 2023 - All rights reserved
				</p>
				<div className='mx-auto flex items-center justify-between gap-4 md:mx-0 md:gap-6'>
					<div className='py-1 px-2'>
						<button
							onClick={handleContact}
							className='relative opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'
						>
							Contact
						</button>
						{contact && (
							<div className='fixed top-1/2 left-1/2 h-64 w-96 -translate-y-[50%] -translate-x-[50%] rounded-md bg-cyan-900/95 py-20 px-8 text-center shadow-2xl drop-shadow-2xl'>
								<p className='mb-4'>
									You can find us using the following methods:
								</p>
								<li>
									<a href='tel:0731692494'>Phone: +40 73 169 2494</a>
								</li>
								<li>
									<a href='mailto:n4xz@icloud.com'>Email: n4xz@icloud.com</a>
								</li>
							</div>
						)}
					</div>
					<div>
						<button
							onClick={handleAbout}
							className='py-1 px-2 opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'
						>
							About
						</button>
						{about && (
							<div className='fixed top-1/2 left-1/2 h-64 w-96 -translate-y-[50%] -translate-x-[50%] rounded-md bg-cyan-900/95 py-16 px-8 text-center shadow-2xl drop-shadow-2xl'>
								<li>
									The purpose of this website is to cover a large spectrum of
									web tools you can use when in need.{' '}
								</li>
								<li className='mt-4'>
									For new tool ideas, contact us via the contact section!
								</li>
							</div>
						)}
					</div>
				</div>
			</div>
		</footer>
	)
}
