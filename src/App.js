import { createBrowserRouter, createRoutesFromElements, Link, Route, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import Bmi from './pages/BMI Calculator/Bmi'
import Home from './pages/Home Page/Home'
import Todo from './pages/Todo List/Todo'

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				 <Route index element={<Home />} />
				 <Route path='/todo' element={<Todo />} />
				 <Route path='/bmi' element={<Bmi />} />
			</Route>
		)
	)
	return (
		<>
			<RouterProvider router={router} />
		</>
	)

}
const Root = () => {
	return (
		<>
			<div>
				<Outlet />
			</div>
		</>
	)
}
