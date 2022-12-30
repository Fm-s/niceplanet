import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./more-info-monitoramento.module.css";
import magnifeirIco from '../../assets/imgs/magnifier.png'

const CollapseParecer = ({ value }) => {
    const [toggle, setToggle] = useState(true);

    return (
        <div onClick={() => setToggle(!toggle)} className={styles.parecerCotainer}>
            <div
                className={
                    styles.labelMonitoramento +
                    " " +
                    styles.parecer +
                    " centeredFlex"
                }
            >
                Parecer <img src={magnifeirIco} alt="Lupa" />
            </div>
            <div className={
                    toggle
                        ? styles.textField
                        : styles.textField + " " + styles.show
                }
            >
                {value}
            </div>
        </div>
    );
};

CollapseParecer.propTypes = {
    counter: PropTypes.any,
    value: PropTypes.any,
};

export default CollapseParecer;
