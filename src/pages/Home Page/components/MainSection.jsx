import Description from './Description'

export default function MainSection() {
	return (
		<div className='mx-auto grid max-w-5xl gap-4 font-extralight'>
			<Description />
			<div className='flex rounded-md bg-black/10 p-4 text-sm italic drop-shadow-2xl'>
				''A multi-tool is a hand tool that combines several individual functions
				in a single unit.''
			</div>
		</div>
	)
}
