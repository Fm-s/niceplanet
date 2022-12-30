import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import dummyHash from "../services/dummyHash"

const UserAuth = React.createContext({
    user: null,
    logged: ()=>Boolean,
    token: null,
    login: (usr, pass, callbackFn) => {
        usr, pass, callbackFn;
    },
    logout: () => {},
});

export const UserAuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");

    const checkLogged = () => {
      const AuthToken = localStorage.getItem("AuthToken")
      if(!logged && AuthToken){
        setToken(AuthToken)
        setUser(localStorage.getItem("userName"))
        setLogged(true)
      }
    }

    const isLogged = () => {
      return logged
    }

    const login = (usr, pass, callbackFn) => {
        pass = dummyHash(pass,"niceplanet123")

        fetch("/niceplanet/login", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ userName: usr, password: pass }),
        }).then((response) => {
            if(response.status === 200){
              response.json().then(res=>{
                localStorage.setItem("userName",res.userName)
                localStorage.setItem("AuthToken",res.token)
                setToken(res.token)
                setUser(res.userName)
                setLogged(true)
              })
            
            }
            
            callbackFn(response.status)
        })
    };

    const logout = (callbackFn) => {
      setLogged(false)
      setUser(null)
      setToken("")
      localStorage.clear("userName")
      localStorage.clear("AuthToken")
      callbackFn()
    }

    return (
        <UserAuth.Provider
            value={{
                user: user,
                logged: isLogged,
                token: token,
                login: login,
                logout: logout,
                checkLogged: checkLogged
            }}
        >
            {children}
        </UserAuth.Provider>
    );
};

UserAuthProvider.propTypes = {
    children: PropTypes.any
};

export default UserAuth;
