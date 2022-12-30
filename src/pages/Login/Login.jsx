import React, { useContext } from 'react'
import UserAuth from "../../contexts/user-auth";
import SimpleNavigation from '../../contexts/navigation-context';

const Login = () => {
    const usrAuthCtx = useContext(UserAuth);
    const navCtx = useContext(SimpleNavigation);

    usrAuthCtx.login("Felipe", "olamundo", () => {navCtx.navigatePath("Inicio")})

    return <h1>Login</h1>
}

export default Login