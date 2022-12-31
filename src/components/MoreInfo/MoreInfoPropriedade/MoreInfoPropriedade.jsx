import React from 'react'
import PropTypes from 'prop-types';
import MoreInfoMonitoramento from '../MoreInfoMonitoramento/MoreInfoMonitoramento';
import styles from './more-info-propriedade.module.css'

const MoreInfoPropriedade = ({propriedadeObj}) => {
    
        let monitorMap
        if(propriedadeObj?.monitoramentos?.length > 0){
            monitorMap = propriedadeObj.monitoramentos.map(mon=>{
                return <div className={styles.monitoramentoCotainer} key={mon.idMonitoramento}><MoreInfoMonitoramento monitoramentoObj={mon} /></div>
                
            })
        }
        return (
        <div className={styles.propriedadeHeader}>
            <div className={styles.spanGroup}>
                <span className={styles.label}>
                    Nome:
                </span>
                <span className={styles.value}>
                    {propriedadeObj.nomePropriedade}
                </span>
            </div>
            <div className={styles.spanGroup}>
                <span className={styles.label}>
                    Codigo:
                </span>
                <span className={styles.value}>
                    {propriedadeObj.idPropriedade}
                </span>
            </div>
            <div className={styles.spanGroup}>
                <span className={styles.label}>
                    Tipo:
                </span>
                <span className={styles.value}>
                    {propriedadeObj.tipoPropriedade}
                </span>
            </div>
            <div className={styles.spanGroup}>
                <span className={styles.label}>
                    Cadastro Rural:
                </span>
                <span className={styles.value}>
                    {propriedadeObj.numeroCadastroRural}
                </span>
            </div>
            
            {monitorMap && <div className={styles.monitoramentoCotainer}>
                <h4>Monitoramentos:</h4>
                {monitorMap}
                </div>} 
        </div>)
    
}

MoreInfoPropriedade.propTypes = {
    propriedadeObj: PropTypes.object
}


export default MoreInfoPropriedade