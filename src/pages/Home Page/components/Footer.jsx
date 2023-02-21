export default function Footer() {
	return (
		<footer>
			<div className='h-[1px] w-full bg-white/20'></div>
			<div className='flex items-center justify-between pt-4'>
				<p className='text-xs opacity-60 md:text-sm hidden md:flex'>
					© 2023 - All rights reserved - Haussen 
				</p>
				<div className='flex items-center justify-between md:gap-4 mx-auto md:mx-0'>
					<button className='py-1 px-2 opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'>
						Resources
					</button>
					<button className='py-1 px-2 opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'>
						Contact
					</button>
					<button className='py-1 px-2 opacity-60 duration-300 hover:cursor-pointer hover:opacity-100 hover:transition-opacity'>
						About
					</button>
				</div>
			</div>
		</footer>
	)
}
