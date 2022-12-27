import React, { useState } from "react";
import styles from "./responsive-header.module.css";
import smgeoSvg from "../../assets/imgs/smgeo-consulta.svg";
import niceplanetMobileSvg from "../../assets/imgs/niceplanet-globe.svg";
import niceplanetSvg from "../../assets/imgs/niceplanet-logo.svg";

const ResponsiveHeader = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

    const mobileMenuToggle = () => {
        setMenuToggle(!menuToggle);
    };

    const headerResize = () => {
        setMenuToggle(false);
        setIsMobile(window.innerWidth < 991);
    };

    window.addEventListener("resize", headerResize);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logoBox + " " + styles.flexLeft}>
                    <img src={smgeoSvg} alt="smgeo consulta" />
                </div>
                <div className={styles.logoBox}>
                    <a href="niceplanet.com">
                        {isMobile && (
                            <img src={niceplanetMobileSvg} alt="Nice Planet" />
                        )}
                        {!isMobile && (
                            <img src={niceplanetSvg} alt="Nice Planet" />
                        )}
                    </a>
                </div>

                {isMobile && (
                    <div
                        className={styles.logoBox + " " + styles.flexRight}
                        onClick={mobileMenuToggle}
                    >
                        <div className={styles.burgerMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}

                {!isMobile && (
                    <div>menu itens</div>
                )}

            </div>
            {isMobile && (
                <div
                    className={
                        menuToggle
                            ? styles.mobileMenu + " " + styles.open
                            : styles.mobileMenu
                    }
                >
                    <div>
                        <div className={styles.menuCircle}></div>
                    </div>
                    <span>Home</span>
                    <span>Voltar</span>
                </div>
            )}
        </>
    );
};

export default ResponsiveHeader;
