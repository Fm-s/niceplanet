import React from 'react';
import logo from '../../assets/imgs/niceplanet-logo.svg';
import styles from "./lading-page.module.css";

function LandingPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageHeader}>
                <img src={logo} className={styles.niceLogo} alt="logo" />
                <p>
                Existimos para contribuir com o desenvolvimento econômico, 
                social e ambiental das cadeias de produção do agronegócio nacional e internacional.
                Somos especialistas no desenvolvimento de tecnologias, análises, monitoramento socioambiental e aplicação dos 
                princípios ESG nos processos de originação de matéria prima e outros procedimentos relacionados ao agro legal e sustentável.
                </p>
                <a
                    className={styles.niceLink}
                    target="_blank"
                    rel='noreferrer'
                    href="http://niceplanet.com.br/"
                >
                    Conheça nosso Portal
                </a>
            </div>
        </div>
    );
}

export default LandingPage;