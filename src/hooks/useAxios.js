import axios from "axios"
import { useContext } from "react"
import UserAuth from "../contexts/user-auth"

const useAxios = () => {
    const authCtx = useContext(UserAuth)
    return axios.create({ baseURL: process.env.API_URL, headers:{"Authorization" : `Bearer ${authCtx.token}`}});
}

export default useAxios;
