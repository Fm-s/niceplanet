import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Routes } from '../routes/Routes';
import LandingPage from '../pages/LandingPage/LandingPage';

const EntryPoint = LandingPage

const SimpleNavigation = React.createContext({
    currentPath: null,
    navigatePath: ()=>{},
    Outlet: null
  })

  export const SimpleNavProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState("Inicio")
    const [Outlet, setOutlet] = useState(<EntryPoint/>)
    
    const navigatePath = (nPath) => {
        if (nPath !== currentPath){
            setOutlet(Routes(nPath))
            setCurrentPath(nPath)
        }
    }
  
    return (
      <SimpleNavigation.Provider value={{ navigatePath: navigatePath, currentPath: currentPath, Outlet:Outlet }}>
        {children}
      </SimpleNavigation.Provider>
    )
  }

  SimpleNavProvider.propTypes = {
    children: PropTypes.node
  }
  
  export default SimpleNavigation