import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const routes = (
    <Router>
      <Routes>
        <Route path='/' element = 'go to /dashboard' />
        <Route path='/dashboard' element = {<Home/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/signup' element = {<Signup/>} />
      </Routes>
    </Router>
  )

export default routes
