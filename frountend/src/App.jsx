import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignInPage from './signin'
import Login from './login'
import Registerednew from './registerednew'
import Loginedold from './loginedold'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<Login />} />
        <Route path="/registernew" element={<Registerednew />} />
        <Route path="/loginedold" element={<Loginedold />} />
      </Routes>
    </Router>
  )
}

export default App
