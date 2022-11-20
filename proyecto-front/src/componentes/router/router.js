import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../login/login';
import Home from '../home/home';
import Planes from '../planes/planes';
import Registro from '../registro/registro';
import Receta from '../Recetas/receta'

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path =  "/login"  element = {<Login/>}/>
                <Route exact path = "/home" element = {<Home/>}/>
                <Route exact path='/planes' element = {<Planes/>}/>
                <Route exact path='/registro' element = {<Registro/>}/>
                <Route exact path='/receta' element = {<Receta/>}/>
            </Routes>
        </Router>
    )
}