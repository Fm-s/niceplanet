import React, { useContext, useState } from "react";
import SimpleNavigation from "../../contexts/navigation-context";
import UserAuth from "../../contexts/user-auth";
import styles from "./responsive-header.module.css";
import smgeoSvg from "../../assets/imgs/smgeo-consulta.svg";
import niceplanetMobileSvg from "../../assets/imgs/niceplanet-globe.svg";
import niceplanetSvg from "../../assets/imgs/niceplanet-logo.svg";
import BurgerMenu from "../BurguerMenu/BurguerMenu";

const ResponsiveHeader = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

    const usrAuthCtx = useContext(UserAuth)

    const navCtx = useContext(SimpleNavigation)
    const currentPath = navCtx.currentPath
    const navFn = navCtx.navigatePath

    const mobileMenuToggle = () => {
        setMenuToggle(!menuToggle);
    };

    const headerResize = () => {
        setMenuToggle(false);
        setIsMobile(window.innerWidth < 991);
    };

    window.addEventListener("resize", headerResize);

    const menuItens = [{name:"Inicio", action:navFn}]
    
    if (usrAuthCtx.logged){
        menuItens.push({name:"Consulta",action:navFn},{name:"Logout",action:() => {usrAuthCtx.setLogged(false)}})
    } else {
        menuItens.push({name:"Login",action:navFn})
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.logoBox + " " + styles.flexLeft}>
                    <img src={smgeoSvg} alt="smgeo consulta" />
                </div>
                <div className={styles.logoBox}>
                    <a target="_blank" href="niceplanet.com">
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
                        <BurgerMenu toggled={menuToggle} />
                    </div>
                )}

                {!isMobile && menuItens.map((el,index)=><div className={currentPath === el.name ? styles.selected : ""} key={index} onClick={()=>{el.action(el.name)}}>{el.name}</div>)}

            </div>
            {isMobile && (
                <div
                    className={
                        menuToggle
                            ? styles.mobileMenu + " " + styles.open
                            : styles.mobileMenu
                    }
                >
                    {menuItens.map((el,index)=><span className={currentPath === el.name ? styles.selected : ""} key={index} onClick={()=>{el.action(el.name)}}>{el.name}</span>)}
                </div>
            )}
        </>
    );
};

export default ResponsiveHeader;
