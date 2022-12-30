import axios from "axios";
// import { useContext } from "react";
// import UserAuth from "../contexts/user-auth";

//headers:{"Authorization" : `Bearer ${authCtx.token}`}

const apiURL = process.env.API_URL;

const getInstance = () => {
    //const authCtx = useContext(UserAuth)
    return axios.create({ baseURL: apiURL});
};

const apiCaller = {
    getInstance: getInstance
};

export default apiCaller;
