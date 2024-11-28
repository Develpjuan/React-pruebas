//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Form from './pages/form';
import Navbar from './components/navbar';
import Mensaje from './components/mensaje';
import CrearUsuario from './pages/crearUsuario';

function App() {
  return (
    <Router>
      <Navbar />
      <Mensaje mensaje="Hola mundo" />
      <Routes>
        <Route path='/Home' element={ <Home /> }></Route>
        <Route path='/Form' element={ <Form /> }></Route>
        <Route path='/CrearUsuario' element={ <CrearUsuario /> }></Route>
      </Routes>
    </Router>
  )
}

export default App;
