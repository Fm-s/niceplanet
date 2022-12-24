import React from 'react'
import styles from './list-styles.module.css'

const ListPropriedades = () => {
    const dataArray = [['João Souza Silva Sauro Muniz','999.999.999-99'],['José Souza Silva Sauro Albuquerque','111.111.111.111-11'],['Maria Firmina Josicleide Andrade','000.000.000-00']]
    
    let mapedOutput;
    
    const listCellStyle = styles.listCell + " " + styles.propriedadeListCell + " centeredFlex"

    if(dataArray?.length > 0){
        
        mapedOutput = dataArray.map(val => {
            return (
            <>           
                <div className={listCellStyle}>{val[0]}</div>
                <div className={listCellStyle}>{val[1]}</div>
            </>
            )
        })
    }else {
        mapedOutput = <div className={listCellStyle + " " + styles.emptyList}> . . .  </div>
    }
    return (
        <div className={styles.listContainer + " " + styles.propriedadeListStyle}>
                <div className={styles.leftCornerListHead + " " + styles.propriedadeCornerHead + " centeredFlex"}>Propriedade</div>
                <div className={styles.rightCornerListHead  + " " + styles.propriedadeCornerHead + " centeredFlex"}>Cadastro Rural</div>
                {mapedOutput}
        </div>
    )
}

export default ListPropriedades