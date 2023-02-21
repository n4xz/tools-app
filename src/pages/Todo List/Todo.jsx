import { useState } from 'react'
import Navbar from './components/Navbar'
import { Task } from './components/Task'

export default function Todo() {
	const [todoList, setTodoList] = useState([])
	const [newTask, setNewTask] = useState('')

	function handleChange(event) {
		setNewTask(event.target.value)
	}

	function addTask() {
		const task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			completed: false
		}
		task.taskName === ''
			? alert('Please input a valid task!')
			: setTodoList([...todoList, task])
	}

	function completeTask(id) {
		setTodoList(
			todoList.map((task) => {
				if (task.id === id) {
					return { ...task, completed: true }
				} else {
					return task
				}
			})
		)
	}

	function deleteTask(id) {
		setTodoList(todoList.filter((task) => task.id !== id))
	}

	return (
		<div className='h-screen w-screen bg-black text-white'>
			<div className='h-screen w-screen overflow-scroll bg-gradient-to-b from-cyan-600/70 to-indigo-700 px-8 pb-32'>
				<Navbar />
				<h1 className='text-3xl mb-4 font-semibold text-center mt-24'>Today's tasks:</h1>
				<div className='mx-auto flex max-h-min min-h-[80%] max-w-screen-md flex-col gap-12 rounded-md bg-gradient-to-br from-black/20 to-black/20 px-8 pt-12 pb-8 shadow-2xl'>
					<div className='mx-auto flex h-10 min-w-full justify-between rounded-md text-xs shadow-2xl drop-shadow-2xl md:text-lg'>
						<input
							onChange={handleChange}
							className='w-full rounded-l-md bg-black/20 px-4 focus:outline-none'
						></input>
						<button
							onClick={addTask}
							className='min-w-max rounded-r-md bg-white/10 px-2 md:px-4'
						>
							Add Task
						</button>
					</div>
					<ul>
						{todoList.map((task) => {
							return (
								<Task
									taskName={task.taskName}
									id={task.id}
									deleteTask={deleteTask}
									completeTask={completeTask}
									completed={task.completed}
								/>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}
