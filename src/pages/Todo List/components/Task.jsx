export const Task = (props) => {
	return (
		<div className='flex items-center justify-between gap-2 px-1 py-2'>
			<p className='overflow-auto text-sm'>{props.taskName}</p>
			<div className='flex gap-3'>
				<button
					style={{
						backgroundColor: props.completed ? 'green' : 'transparent', borderRadius:'20px'
					}}
					onClick={() => props.completeTask(props.id)}
					className='h-5 w-5 rounded-full text-xs outline outline-[1px]'
				>
					✓
				</button>
				<button
					onClick={() => props.deleteTask(props.id)}
					className='h-5 w-5 rounded-full text-xs outline outline-[1px] hover:text-red-600'
				>
					✘
				</button>
			</div>
		</div>
	)
}
