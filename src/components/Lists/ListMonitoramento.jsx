import React from 'react'
import PropTypes from 'prop-types';
import styles from './list-styles.module.css'

const ListMonitoramento = ({dataArray, onClickFn}) => {
    
    let mapedOutput;
    
    const listCellStyle = styles.listCell + " " + styles.propriedadeListCell + " centeredFlex"

    if(dataArray?.length > 0){
        
        mapedOutput = dataArray.map(val => {
            return (
            <React.Fragment key={"monitoramento_"+ val.idMonitoramento}>
                <div onClick={()=>{onClickFn(val.idMonitoramento)}} className={styles.monitoramentoListEntry + " centeredFlex"}>
                    <div className={styles.labelMonitoramento + " centeredFlex"}>Data:</div>
                    <div className={styles.valueMonitoramento}>{val.dataMonitoramento}</div>
                    <div className={styles.labelMonitoramento + " centeredFlex"}>Analista:</div>
                    <div className={styles.valueMonitoramento}>{val.analista}</div>
                </div>
                <div className={styles.monitoramentoDescription}>
                    {val.resultado}
                    <span className={styles.monitoramentoDescriptionLabel}>Resultado:</span>
                </div>
            </React.Fragment>
            )
        })
    }else {
        mapedOutput = <div className={listCellStyle + " " + styles.emptyList}> . . .  </div>
    }
    return (
        <div className={styles.monitoramentoList}>
                <div className={styles.monitoramentoListHead + " centeredFlex"}>Monitoramento</div> 
                {mapedOutput}
        </div>
    )
}


ListMonitoramento.propTypes = {
    dataArray: PropTypes.array,
    onClickFn: PropTypes.func
}


export default ListMonitoramento