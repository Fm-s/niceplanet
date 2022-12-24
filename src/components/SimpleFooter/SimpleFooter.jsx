import React from 'react'

import niceplanetLogo from '../../assets/imgs/niceplanet-logo.svg'

const SimpleFooter = () => {
    const style = {
        width: "100%",
        boxSizing: "border-box",
        padding: "50px",
        marginTop: "50px",
        backgroundColor: "#228C22",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    return (
        <div style={style}>
            <img src={niceplanetLogo} alt="Footer logo"/>
            <span style={{color:"#fff"}}>© Copyright 2009-2022</span>
        </div>
    )
}

export default SimpleFooter