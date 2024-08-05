import React, { useEffect } from 'react';
import './App.css';
import Router from './Router';
import MainContextProvider from './contexts/MainContext';
import { SnackbarProvider } from 'notistack';

function App() {
  useEffect(()=>{
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  },[])
  return (
    <SnackbarProvider>
    <MainContextProvider>      
        <Router />      
    </MainContextProvider>
    </SnackbarProvider>
  );
}

export default App;
