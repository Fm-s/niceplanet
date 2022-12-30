import React from 'react'
import PropTypes from 'prop-types';
import styles from './list-styles.module.css'

const ListPropriedades = ({onClickFn,dataArray}) => {
    
    let mapedOutput;
    
    const listCellStyle = styles.listCell + " " + styles.propriedadeListCell + " centeredFlex"

    if(dataArray?.length > 0){
        
        mapedOutput = dataArray.map(val => {
            return (
            <React.Fragment key={"propriedade_"+ val.idPropriedade}>           
                <div onClick={()=>{onClickFn(val.idPropriedade)}} className={listCellStyle}>{val.nomePropriedade}</div>
                <div onClick={()=>{onClickFn(val.idPropriedade)}} className={listCellStyle}>{val.numeroCadastroRural}</div>
            </React.Fragment>
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

ListPropriedades.propTypes = {
    dataArray: PropTypes.array,
    onClickFn: PropTypes.func
}

export default ListPropriedades