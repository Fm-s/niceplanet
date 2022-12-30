import React, { useContext, useEffect, useState } from "react";
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

    const usrAuthCtx = useContext(UserAuth);

    const navCtx = useContext(SimpleNavigation);
    const navFn = navCtx.navigatePath;

    useEffect(() => {
        usrAuthCtx.checkLogged();
    }, []);

    const mobileMenuToggle = () => {
        setMenuToggle(!menuToggle);
    };

    const headerResize = () => {
        setMenuToggle(false);
        setIsMobile(window.innerWidth < 991);
    };

    const onMenuClick = (callFn) => {
        setMenuToggle(false);
        callFn();
    };

    window.addEventListener("resize", headerResize);

    const menuItens = [{ name: "Inicio", action: () => onMenuClick(()=>{navFn("Inicio")})}];

    if (usrAuthCtx.logged()) {
        menuItens.push(
            { name: "Consulta", action: () => onMenuClick(()=>navFn("Consulta")) },
            { name: "Logout", action: () => onMenuClick(()=>usrAuthCtx.logout(()=>{navFn("Inicio")})) }
        );
    } else {
        menuItens.push({
            name: "Login",
            action: () =>
                onMenuClick(() => {
                    onMenuClick(()=>{navFn("Login")})
                }),
        });
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

                {!isMobile && (
                    <div className={styles.logoBox + " " + styles.flexRight + " " + styles.wideMenu}>
                        {menuItens.map((el, index) => (
                            <div className={
                                    navCtx.currentPath === el.name
                                        ? styles.selected
                                        : ""
                                }
                                key={index} onClick={() => {el.action(el.name)}}
                            >
                                {el.name}
                            </div>
                        ))}
                    </div>
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
                    {menuItens.map((el, index) => (
                        <span
                            className={
                                navCtx.currentPath === el.name
                                    ? styles.selected
                                    : ""
                            }
                            key={index}
                            onClick={() => {
                                el.action(el.name);
                            }}
                        >
                            {el.name}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default ResponsiveHeader;
