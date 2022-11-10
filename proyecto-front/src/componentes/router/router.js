import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../login/login';
import Home from '../home/home';
import Planes from '../planes/planes';

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route exact path =  "/login"  element = {<Login/>}/>
                <Route exact path = "/home" element = {<Home/>}/>
                <Route exact path='/planes' element = {<Planes/>}/>
            </Routes>
        </Router>
    )
}