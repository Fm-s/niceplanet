import React from 'react'

import styles from './list-styles.module.css'

const ListMonitoramento = () => {
    const longString = "O perímetro do SICAR QQ-0001559-47ABABC582DD473BBAABCD145F51E567 possui sobreposição superior a 10% a outros perímetros de propriedades rurais. Solicitar ao proprietário procurar soluções junto a SEMA. Favor encaminhar documentos oficiais, tais como; georreferenciamento, matricula da propriedade, memorial descritivo da propriedade registrado em cartório, protocolado no INCRA e outros documentos oficiais da propriedade.Por meio da documentação em anexo não é possível confirmar a posse informada no cadastro em análise. Desta forma, a análise em questão se atenta as informações disponibilizadas no cadastro e nos dados geográficos do CAR anexado."
    const dataArray = [['24/12/2022 10:23','Antônio Neto', 'very very long description text'],['23/12/2022 10:23','Jonhathans Soares',longString]]
    
    let mapedOutput;
    
    const listCellStyle = styles.listCell + " " + styles.propriedadeListCell + " centeredFlex"

    if(dataArray?.length > 0){
        
        mapedOutput = dataArray.map(val => {
            return (
            <>
                <div className={styles.monitoramentoListEntry + " centeredFlex"}>
                    <div className={styles.labelMonitoramento + " centeredFlex"}>Data:</div>
                    <div className={styles.valueMonitoramento}>{val[0]}</div>
                    <div className={styles.labelMonitoramento + " centeredFlex"}>Analista:</div>
                    <div className={styles.valueMonitoramento}>{val[1]}</div>
                </div>
                <div className={styles.monitoramentoDescription}>
                    {val[2]}
                    <span className={styles.monitoramentoDescriptionLabel}>Resultado:</span>
                </div>
            </>
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

export default ListMonitoramento