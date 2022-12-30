import React from "react";
import PropTypes from "prop-types";
import styles from "./burguer-menu.module.css";

const BurgerMenu = ({ toggled }) => {
    return (
        <div
            className={
                toggled
                    ? styles.burgerMenu + " " + styles.active
                    : styles.burgerMenu
            }
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

BurgerMenu.propTypes = {
    toggled: PropTypes.bool,
};

export default BurgerMenu;
