import React, { useState } from "react";
import styles from "./responsive-header.module.css";
import smgeoSvg from "../../assets/imgs/smgeo-consulta.svg";
import niceplanetSvg from "../../assets/imgs/niceplanet-globe.svg";

const ResponsiveHeader = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    const mobileMenuToggle = () => {
        setMenuToggle(!menuToggle);
    };

    const mobileMenuClose = () => {
        setMenuToggle(false);
    };

    window.addEventListener("resize", mobileMenuClose);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logoBox + " " + styles.flexLeft}>
                    <img src={smgeoSvg} alt="smgeo consulta" />
                </div>
                <div className={styles.logoBox}>
                    <a href="niceplanet.com">
                        <img src={niceplanetSvg} alt="Nice Planet" />
                    </a>
                </div>
                <div className={styles.logoBox + " " + styles.flexRight} onClick={mobileMenuToggle}>
                    <div className={styles.burgerMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div
                className={menuToggle ? styles.mobileMenu + " " + styles.open : styles.mobileMenu}>
                <div>
                    <div className={styles.menuCircle}></div>
                </div>
                <span>Home</span>
                <span>Voltar</span>
            </div>
        </>
    );
};

export default ResponsiveHeader;
