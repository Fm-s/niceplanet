import React, { useContext, useState } from 'react'
import UserAuth from "../../contexts/user-auth";
import SimpleNavigation from '../../contexts/navigation-context';
import styles from "./login.module.css";

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const usrAuthCtx = useContext(UserAuth);
    const navCtx = useContext(SimpleNavigation);

    const hasLoggedIn = (status) => {
        console.log(status)
        if(status === 200){
            navCtx.navigatePath("Inicio")
            return
        }
        setErrorMessages({name: status, message: "Senha ou Usuário Invalidos!"})
        setIsSubmitted(isSubmitted)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { uname, pass } = document.forms[0];

        usrAuthCtx.login(uname.value, pass.value, hasLoggedIn)

    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className={styles.error}>{errorMessages.message}</div>
        );

    const renderForm = (
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label>Usuário </label>
                    <input type="text" name="uname" required />
                </div>
                <div className={styles.inputContainer}>
                    <label>Senha </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage(401)}
                    {renderErrorMessage(500)}
                </div>
                <div className={styles.buttonContainer}>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <div className={styles.title}>Entrar</div>
                {isSubmitted ? <div>Logado!</div> : renderForm}
            </div>
        </div>
    );
}

export default Login;