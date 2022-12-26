import React, { useEffect, useState } from "react";
import ListMonitoramento from "../../components/Lists/ListMonitoramento";
import ListProdutores from "../../components/Lists/ListProdutores";
import ListPropriedades from "../../components/Lists/ListPropriedades";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponviseHeader";
import SimpleFooter from "../../components/SimpleFooter/SimpleFooter";
import Spinner from "../../components/Spinner/Spinner";
import dataService from "../../services/dataService";
import styles from "./main-page.module.css";

const MainPage = () => {
    const [isProdutoresLoading,setIsProdutoresLoading] = useState(true);
    const [isPropriedadesLoading,setIsPropriedadesLoading] = useState(true);
    const [isMonitoramentoLoading,setIsMonitoramentoLoading] = useState(true);
    
    const [produtoresDataArray,setProdutoresDataArray] = useState([])
    const [propriedadesDataArray,setPropriedadesDataArray] = useState([])
    const [monitoramentoDataArray,setMonitoramentoDataArray] = useState([])

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

    return (
        <>
            <ResponsiveHeader />
            <div className={styles.main + " grid"}>
                <div className="col-xs-12 col-sm-12 col-lg-6">
                    {isProdutoresLoading && <Spinner size="90px" />}
                    {!isProdutoresLoading && <ListProdutores dataArray={produtoresDataArray} />}
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
            <SimpleFooter/>
        </>
    );
};



export default MainPage;
