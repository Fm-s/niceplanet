import useAxios from "../hooks/useAxios";

const useData = () => {
    const axiosInstance = useAxios()

    const fetchListByEndPoint = (apiEndPoint) => {
        return axiosInstance.get(apiEndPoint)
            .then((res) => {
                const dataArr = [];
                for (const keys in res.data) {
                    dataArr.push({ ...res.data[keys] });
                }
                return dataArr;
            });
    };
    
    const fetchListProdutores = () => {
        return fetchListByEndPoint("produtores");
    };
    
    const fetchListPropriedades = () => {
        return fetchListByEndPoint("propriedades");
    };
    
    const fetchListMonitoramentos = () => {
        return fetchListByEndPoint("monitoramentos");
    };

    return {
    fetchListProdutores: fetchListProdutores,
    fetchListPropriedades: fetchListPropriedades,
    fetchListMonitoramentos: fetchListMonitoramentos}
};

export default useData;
