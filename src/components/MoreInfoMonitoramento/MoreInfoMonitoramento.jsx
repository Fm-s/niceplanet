import React from 'react'
import PropTypes from 'prop-types';
import styles from './more-info-monitoramento.module.css'
import CollapseParecer from './CollapseParecer';

const MoreInfoMonitoramento = ({monitoramentoObj}) => {
    return (
    <>
    <div className={styles.monitoramentoListEntry + " centeredFlex"}>
    <div className={styles.labelMonitoramento + " centeredFlex"}>Data:</div>
    <div className={styles.valueMonitoramento}>{monitoramentoObj.dataMonitoramento}</div>
    <div className={styles.labelMonitoramento + " centeredFlex"}>Analista:</div>
    <div className={styles.valueMonitoramento}>{monitoramentoObj.analista}</div>
</div>
<div className={styles.monitoramentoDescription}>
    {monitoramentoObj.resultado}
    <span className={styles.monitoramentoDescriptionLabel}>Resultado:</span>
</div>
<CollapseParecer value={monitoramentoObj.parecerAnalise} />
</>)
}

MoreInfoMonitoramento.propTypes = {
    monitoramentoObj: PropTypes.object
}

export default MoreInfoMonitoramento