import Description from './Description'

export default function MainSection() {
	return (
		<div className='mx-auto grid max-w-5xl gap-4 font-extralight'>
			<Description />
			<div
				className='rounded-md bg-black/10 p-4 text-sm
			drop-shadow-2xl'
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro
				inventore doloribus modi quasi saepe quisquam iste reiciendis
				doloremque, perspiciatis pariatur dignissimos.
			</div>
			<div className='flex items-center rounded-md bg-black/10 p-4 text-center text-xs italic drop-shadow-2xl'>
				''A multi-tool (or multitool) is a hand tool that combines several
				individual functions in a single unit.''
			</div>
		</div>
	)
}
