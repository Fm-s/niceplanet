import React from 'react'
import styles from './list-styles.module.css'
import PropTypes from 'prop-types';

const ListProdutores = ({dataArray}) => {
    
    let mapedOutput;
    
    const listCellStyle = styles.listCell + " " + styles.produtorListCell + " centeredFlex"

    if(dataArray?.length > 0){
        
        mapedOutput = dataArray.map(val => {
            return (
            <React.Fragment key={"produtor_"+ val.idprodutor}>
                <div className={listCellStyle}>{val.nomeProdutor}</div>
                <div className={listCellStyle}>{val.cpfProdutor}</div>
            </React.Fragment>
            )
        })
    }else {
        mapedOutput = <div className={listCellStyle + " " + styles.emptyList}> . . .  </div>
    }
    return (
        <div className={styles.listContainer + " " + styles.produtorListStyle}>
                
                <div className={styles.leftCornerListHead + " " + styles.produtorCornerHead + " centeredFlex"}>
                    Produtor
                </div>
                
                <div className={styles.rightCornerListHead  + " " + styles.produtorCornerHead + " centeredFlex"}>
                    CPF
                </div>
                
                {mapedOutput}
        </div>
    )
}

ListProdutores.propTypes = {
    dataArray: PropTypes.array
}

export default ListProdutores