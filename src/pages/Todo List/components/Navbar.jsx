import React from 'react'
import { HiChevronDoubleLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='fixed left-0 right-0 top-0 h-16 bg-black/10'>
			<Link to='/'>
				<HiChevronDoubleLeft color='white' size={40} className='my-3 ml-3' />
			</Link>
		</div>
	)
}

export default Navbar
