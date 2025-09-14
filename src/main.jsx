import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
import AppRouter from './routes/AppRouter.jsx';
import '@/styles/index.css';
import { LanguageProvider } from '@/contexts/languageContext';
import "./i18n";
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import LoadingScreen from './components/molecules/LoadingScreen.jsx';

function Root(){
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },3000);
    return ()=> clearTimeout(timer);
  },[]);

  if(loading){
    return <LoadingScreen />;
  }
  return(
         <LanguageProvider>
                <ThemeProvider>
  <RouterProvider router={AppRouter} />
                </ThemeProvider>
                </LanguageProvider>
  )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <Root />
    </StrictMode>,


)
