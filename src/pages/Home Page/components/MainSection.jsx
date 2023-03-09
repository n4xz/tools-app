import Description from './Description'

export default function MainSection() {
	return (
		<div className='mx-auto flex max-w-5xl flex-col items-center gap-4 font-extralight'>
			<Description />
			<div className='flex rounded-md bg-black/10 p-4 text-center text-sm italic drop-shadow-2xl'>
				''A multi-tool is a hand tool that combines several individual functions
				in a single unit.''
			</div>
		</div>
	)
}
