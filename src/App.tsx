import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Expenses from './components/Expenses/Expenses';
import Error from './components/Error/Error';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/track" element={<Expenses/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </Router>
  )
}

export default App
