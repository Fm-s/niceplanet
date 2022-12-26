import apiCaller from "./apiCaller";

const fetchListByEndPoint = (apiEndPoint) => {
    return apiCaller.getInstance().get(apiEndPoint)
        .then((res) => {
            const dataArr = [];
            for (const keys in res.data) {
                dataArr.push({ ...res.data[keys] });
            }
            return dataArr;
        });
};

export const fetchListProdutores = () => {
    return fetchListByEndPoint("produtores");
};

export const fetchListPropriedades = () => {
    return fetchListByEndPoint("propriedades");
};

export const fetchListMonitoramentos = () => {
    return fetchListByEndPoint("monitoramentos");
};

const dataService = {
    fetchListProdutores: fetchListProdutores,
    fetchListPropriedades: fetchListPropriedades,
    fetchListMonitoramentos: fetchListMonitoramentos
};

export default dataService;
