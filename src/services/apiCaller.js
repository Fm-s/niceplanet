import axios from "axios";

const apiURL = process.env.API_URL;

const getInstance = () => {
    return axios.create({ baseURL: apiURL });
};

const apiCaller = {
    getInstance: getInstance
};

export default apiCaller;
