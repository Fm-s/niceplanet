import React from 'react'
import PropTypes from "prop-types";
import styles from './more-info-produtor.module.css'

const ProdutorHeader = ({produtor}) => {
    return (
        <div className={styles.produtorHeader}>
            <div className={styles.spanGroup}>
                <span className={styles.label}>
                    Codigo:
                </span>
                <span className={styles.value}>
                    {produtor.idprodutor}
                </span>
            </div>
            <div className={styles.spanGroup}>
                <span className={styles.label}>
                    Nome:
                </span>
                <span className={styles.value}>
                    {produtor.nomeProdutor}
                </span>
            </div>
            <div className={styles.spanGroup}>
                <span className={styles.label}>
                    CPF:
                </span>
                <span className={styles.value}>
                    {produtor.cpfProdutor}
                </span>
            </div>
        </div>
    )
}

ProdutorHeader.propTypes = {
    produtor: PropTypes.object
}

export default ProdutorHeader