import React, { useContext } from 'react'
import ResponsiveHeader from "./components/ResponsiveHeader/ResponsiveHeader";
import SimpleNavigation from './contexts/navigation-context';
import './App.css';



function App() {
  const navCtx = useContext(SimpleNavigation)
  return <>
    <ResponsiveHeader />
    {navCtx.Outlet}
  </>
}

export default App;
