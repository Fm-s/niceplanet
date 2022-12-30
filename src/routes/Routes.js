import React from 'react'
import NotFound from '../components/NotFound/NotFound';
import Consulta from '../pages/Consulta/Consulta';
import LandingPage from '../pages/LandingPage/LandingPage';


export const Routes = (nPath) => {
    switch (nPath){
        case "Inicio":
            return <LandingPage />
        case "Consulta":
            return <Consulta />
        case "Login":
            break
        default:
            return <NotFound />
    }

}