import React from 'react'
import ResponsiveHeader from "./components/ResponsiveHeader/ResponviseHeader";
import MainPage from './pages/MainPage/MainPage';

import './App.css';
// import { Outlet } from './routes/Routes';

function App() {
  return <>
    <ResponsiveHeader />
    <MainPage />
  </>
}

export default App;
