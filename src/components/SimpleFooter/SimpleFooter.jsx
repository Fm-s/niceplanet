import React from 'react'

import niceplanetLogo from '../../assets/imgs/niceplanet-logo.svg'

const SimpleFooter = () => {
    const style = {
        width: "100%",
        padding: "10px 0",
        marginTop: "30px",
        boxSizing: "border-box",
        backgroundColor: "#228C22",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    return (
        <div style={style}>
            <img style={{maxWidth: "200px"}} src={niceplanetLogo} alt="Footer logo"/>
        </div>
    )
}

export default SimpleFooter