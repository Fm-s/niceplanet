import React from 'react'
import styles from './responsive-header.module.css'
import smgeoSvg from '../../assets/imgs/smgeo-consulta.svg'
import niceplanetSvg from '../../assets/imgs/niceplanet-globe.svg'

const ResponsiveHeader = () => {
    //120x60 //52x52
    return(
        <div className={styles.header}>
            <div className={styles.logoBox + " " + styles.flexLeft}>
                <img src={smgeoSvg} alt="smgeo consulta"/>
            </div>
            <div className={styles.logoBox}>
            <img src={niceplanetSvg} alt="Nice Planet"/>
            </div>
            <div className={styles.logoBox + " " + styles.flexRight}>
                <div className={styles.burgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveHeader