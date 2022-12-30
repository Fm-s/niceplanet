import React, { useEffect, useState } from "react";
import ListMonitoramento from "../../components/Lists/ListMonitoramento";
import ListProdutores from "../../components/Lists/ListProdutores";
import ListPropriedades from "../../components/Lists/ListPropriedades";
import SimpleFooter from "../../components/SimpleFooter/SimpleFooter";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import useData from "../../hooks/useData";
import styles from "./consulta.module.css";

const MainPage = () => {
    const [isProdutoresLoading,setIsProdutoresLoading] = useState(true);
    const [isPropriedadesLoading,setIsPropriedadesLoading] = useState(true);
    const [isMonitoramentoLoading,setIsMonitoramentoLoading] = useState(true);
    
    const [produtoresDataArray,setProdutoresDataArray] = useState([])
    const [propriedadesDataArray,setPropriedadesDataArray] = useState([])
    const [monitoramentoDataArray,setMonitoramentoDataArray] = useState([])

    const [showModal,setShowModal] = useState(false);

    const dataService = useData()

    useEffect(()=>{
    
        dataService.fetchListProdutores().then(dataArray=>{
            setProdutoresDataArray(dataArray)
            setIsProdutoresLoading(false)
        }).catch(err => {
            console.log("produtores: " + err.message)
            setIsProdutoresLoading(false)
        })

        dataService.fetchListPropriedades().then(dataArray=>{
            setPropriedadesDataArray(dataArray)
            setIsPropriedadesLoading(false)
        }).catch(err => {
            console.log("Propriedades: " + err.message)
            setIsPropriedadesLoading(false)
        })

        dataService.fetchListMonitoramentos().then(dataArray=>{
            setMonitoramentoDataArray(dataArray)
            setIsMonitoramentoLoading(false)
        }).catch(err => {
            console.log("Monitoramentos: " + err.message)
            setIsMonitoramentoLoading(false)
        })


    },[])

    const modalCtrl = (data) => {
        setShowModal(<Modal closeFn={()=>{setShowModal(false)}} >{data.movementX}</Modal>)

    }


    return (
        <>
            {showModal}
            <div className={styles.main + " grid"}>
                <div className="col-xs-12 col-sm-12 col-lg-6">
                    {isProdutoresLoading && <Spinner size="90px" />}
                    {!isProdutoresLoading && <ListProdutores modalFn={modalCtrl} dataArray={produtoresDataArray} />}
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-6">
                    {isPropriedadesLoading && <Spinner size="90px" />}
                    {!isPropriedadesLoading && <ListPropriedades dataArray={propriedadesDataArray} />}
                </div>
                <div className="col-12">
                    {isMonitoramentoLoading && <Spinner size="90px" />}
                    {!isMonitoramentoLoading && <ListMonitoramento dataArray={monitoramentoDataArray} />}
                </div>
            </div>
            <button onClick={modalCtrl}>text</button>
            <SimpleFooter/>
        </>
    );
};



export default MainPage;