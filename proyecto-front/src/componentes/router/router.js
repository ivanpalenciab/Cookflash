import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../login/login';
import Home from '../home/home';
import Planes from '../planes/planes';
import Registro from '../registro/registro';
import Receta from '../Recetas/receta'
import RecetaPage from '../home/recetaPage';

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path =  "/login"  element = {<Login/>}/>
                <Route exact path = "/home" element = {<Home/>}/>
                <Route exact path='/planes' element = {<Planes/>}/>
                <Route exact path='/registro' element = {<Registro/>}/>
                <Route exact path='/crear-receta' element = {<Receta/>}/>
                <Route exact path='/:id' element = {<RecetaPage/>}/>
            </Routes>
        </Router>
    )
}