//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/form';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/Home' element={ <Home /> }></Route>
        <Route path='/Form' element={ <Form /> }></Route>
      </Routes>
    </Router>
  )
}

export default App;
