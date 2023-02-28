import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Menu from './Menu'

export default function Navbar() {
	const [menu, setMenu] = useState(true)
	const handleMenu = () => {
		setMenu(!menu)
	}

	return (
		<>
			<header className='flex flex-col gap-4'>
				<div className='flex justify-between'>
					<a
						href='/'
						className='flex h-min w-max items-center px-2 pb-1 text-3xl font-thin italic shadow outline outline-[0.5px]'
					>
						Everyday Tools
					</a>
					<div className='hidden w-max items-center gap-8 text-white md:flex'>
						<Link
							to='/todo'
							className='transition-transform duration-200 hover:scale-110'
						>
							Todo List
						</Link>
						<Link
							to='/bmi'
							className='transition-transform duration-200 hover:scale-110'
						>
							BMI Calculator
						</Link>
						<p
							className='transition-transform duration-200 hover:scale-110'
						>
							Converter (not working yet)
						</p>
					</div>
					<button className='md:hidden' onClick={handleMenu}>
						<HiMenuAlt3 size={40} />
					</button>
				</div>
				<div className='bottom-0 h-[1px] w-full bg-white/20'></div>
			</header>
			{!menu ? <Menu menu={menu} handleMenu={handleMenu} /> : ''}
		</>
	)
}
