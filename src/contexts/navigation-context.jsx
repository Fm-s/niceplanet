import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Routes } from '../routes/Routes';

const SimpleNavigation = React.createContext({
    currentPath: null,
    navigatePath: ()=>{}
  })

  export const SimpleNavProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState("inicio");
    
    const navigatePath = (nPath) => {
        if (nPath !== currentPath){
            Routes(nPath)
            setCurrentPath(nPath)
        }
    }
  
    return (
      <SimpleNavigation.Provider value={{ navigatePath: navigatePath, currentPath: currentPath }}>
        {children}
      </SimpleNavigation.Provider>
    )
  }

  SimpleNavProvider.propTypes = {
    children: PropTypes.node
  }
  
  export default SimpleNavigation