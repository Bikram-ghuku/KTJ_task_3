import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Expenses from './components/Expenses';
import Error from './components/Error';

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
