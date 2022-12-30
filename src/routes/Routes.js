import NotFound from '../components/NotFound/NotFound';
import MainPage from '../pages/MainPage/MainPage';
import LandingPage from '../pages/LandingPage/LandingPage';


export const Routes = (nPath) => {
    switch (nPath){
        case "Inicio":
            return LandingPage
        case "Consulta":
            return MainPage
        case "Login":
            break
        default:
            return NotFound
    }

}