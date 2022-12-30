import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import dummyHash from "../services/dummyHash"

const UserAuth = React.createContext({
    user: null,
    logged: ()=>Boolean,
    token: null,
    login: (usr, pass, callback) => {
        usr, pass, callback;
    },
    logout: () => {},
});

export const UserAuthProvider = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");


    const isLogged = () => {
      const AuthToken = localStorage.getItem("AuthToken")
      if(!logged && AuthToken){
        setToken(AuthToken)
        setUser(localStorage.getItem("userName"))
        setLogged(true)
      }
      return logged
    }

    const login = (usr, pass, callback) => {
        pass = dummyHash(pass,"niceplanet123")

        fetch("/login", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ userName: usr, password: pass }),
        }).then((response) => {
            response
                .json()
                .then((res) => {
                    if (res.loggedUser) {
                        setLogged(true);
                        setUser(res.loggedUser);
                    } else {
                        callback({ status: true, errMsg: res.ErrMsg });
                    }
                })
                .catch((err) => {
                    callback({ status: true, errMsg: err.message });
                });
        });
    };

    const logout = () => {
      setLogged(false)
      setUser(null)
      setToken("")
      localStorage.clear("userName")
      localStorage.clear("AuthToken")
    }

    return (
        <UserAuth.Provider
            value={{
                user: user,
                logged: isLogged,
                token: token,
                login: login,
                logout: logout
            }}
        >
            {children}
        </UserAuth.Provider>
    );
};

UserAuthProvider.propTypes = {
    children: PropTypes.node,
};

export default UserAuth;
