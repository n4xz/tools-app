import { useState } from 'react'
import Navbar from './components/Navbar'
import { Task } from './components/Task'
import { motion } from 'framer-motion'

export default function Todo() {
	const [todoList, setTodoList] = useState([])
	const [newTask, setNewTask] = useState('')

	function handleChange(event) {
		setNewTask(event.target.value)
	}

	function clearTasks() {
		setTodoList([])
		setNewTask('')
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
		setNewTask('')
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
				<motion.div
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className='mx-auto mt-20 flex max-h-min min-h-[80%] max-w-screen-md flex-col items-center gap-4 rounded-md bg-gradient-to-br from-black/20 to-black/20 px-8 pt-12 shadow-2xl sm:gap-12 md:mt-32'
				>
					<h1 className='mb-4 text-center text-3xl font-semibold'>
						Today's tasks:
					</h1>
					<div className='flex h-10 min-w-full justify-between rounded-md text-xs shadow-2xl drop-shadow-2xl md:text-lg'>
						<input
							value={newTask}
							placeholder='Add a new task here...'
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
					<button
						onClick={clearTasks}
						className='w-fit rounded-md border px-2 py-1 transition-all duration-100 ease-in-out active:bg-white active:text-black md:hover:bg-white md:hover:text-black md:hover:drop-shadow-lg'
					>
						Delete all tasks
					</button>
					{(todoList.length > 0) && (
					<ul className='min-w-full rounded-md bg-black/20 p-4 pb-8'>
						<p className='pb-5'>Tasks you need to complete:</p>
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
						
					)}
				</motion.div>
			</div>
		</div>
	)
}
