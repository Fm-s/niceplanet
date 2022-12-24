import React from "react";
import ListMonitoramento from "../../components/Lists/ListMonitoramento";
import ListProdutores from "../../components/Lists/ListProdutores";
import ListPropriedades from "../../components/Lists/ListPropriedades";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponviseHeader";
import SimpleFooter from "../../components/SimpleFooter/SimpleFooter";
import styles from "./main-page.module.css";

const MainPage = () => {
    return (
        <>
            <ResponsiveHeader />
            <div className={styles.main}>
                <div className="col-xs-12">
                    <ListProdutores />
                </div>
                <div className="col-xs-12">
                    <ListPropriedades />
                </div>
                <div className="col-xs12">
                    <ListMonitoramento/>
                </div>
            </div>
            <SimpleFooter/>
        </>
    );
};

export default MainPage;
