import React from 'react'
import ListProdutores from '../../components/Lists/ListProdutores';
import ResponsiveHeader from '../../components/ResponsiveHeader/ResponviseHeader';
import styles from './main-page.module.css'

const MainPage = () => {
    return(
        <>
        <ResponsiveHeader/>
        <div className={styles.main}>
            <ListProdutores/>
        </div>
        </>
    )
}

export default MainPage;