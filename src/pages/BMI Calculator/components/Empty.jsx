import React from 'react'
import { GiWeightLiftingUp } from 'react-icons/gi'

const Empty = () => {
  return (
		<div className='flex flex-col items-center text-xs'>
			<p className='mt-4 text-white/20'>
				Complete the form to find out your results.
			</p>
			<GiWeightLiftingUp size={100} className='mt-4 text-white/10' />
		</div>
	)
}

export default Empty