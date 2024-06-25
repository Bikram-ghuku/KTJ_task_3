import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Expenses from './components/Expenses';
import Error from './components/Error';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path="/track" element={<Expenses/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
