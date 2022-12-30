import useAxios from "../hooks/useAxios"

const useData = () => {
    const axiosInstance = useAxios()

    const fetchListByEndPoint = (apiEndPoint) => {
        return axiosInstance.get(apiEndPoint)
            .then((res) => {
                const dataArr = [];
                for (const keys in res.data) {
                    dataArr.push({ ...res.data[keys] })
                }
                return dataArr
            });
    };
    
    const fetchListProdutores = () => {
        return fetchListByEndPoint("produtores")
    }
    
    const fetchListPropriedades = () => {
        return fetchListByEndPoint("propriedades")
    }
    
    const fetchListMonitoramentos = () => {
        return fetchListByEndPoint("monitoramentos")
    }

    const fetchProdutor = (idProdutor) => {
        if(idProdutor){
            return axiosInstance.get("produtor/" + idProdutor).then( el => el.data)
        }
        return Promise.resolve(null)
    }

    return {
    fetchListProdutores: fetchListProdutores,
    fetchListPropriedades: fetchListPropriedades,
    fetchListMonitoramentos: fetchListMonitoramentos,
    fetchProdutor: fetchProdutor
    }
};

export default useData
