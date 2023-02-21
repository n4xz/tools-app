import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Bmi from './pages/BMI Calculator/Bmi'
import Home from './pages/Home Page/Home'
import Todo from './pages/Todo List/Todo'

export default function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/todo' element={<Todo />} />
					<Route path='/bmi' element={<Bmi />} />
				</Routes>
			</Router>
		</div>
	)
}
