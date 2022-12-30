import React from 'react'
import NotFound from '../components/NotFound/NotFound';
import Consulta from '../pages/Consulta/Consulta';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from '../pages/Login/Login';


export const Routes = (nPath) => {
    switch (nPath){
        case "Inicio":
            return <LandingPage />
        case "Consulta":
            return <Consulta />
        case "Login":
            return <Login />
        default:
            return <NotFound />
    }

}