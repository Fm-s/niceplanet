import React from 'react'
import NotFound from '../components/NotFound/NotFound';
import MainPage from '../pages/MainPage/MainPage';

export let Outlet = <MainPage />;

export const Routes = (nPath) => {
    switch (nPath){
        case "Inicio":
            Outlet = ""
        break
        
        case "Consulta":
            Outlet = MainPage
        break
        case "Login":
            break
        default:
            Outlet = NotFound
    }

}