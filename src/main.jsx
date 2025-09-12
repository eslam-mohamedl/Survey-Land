import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
import AppRouter from './routes/AppRouter.jsx';
import '@/styles/index.css';
import { LanguageProvider } from '@/contexts/languageContext';
import "./i18n";
import { ThemeProvider } from './contexts/ThemeContext.jsx';
createRoot(document.getElementById('root')).render(
    <StrictMode>
             <LanguageProvider>
                <ThemeProvider>
     <RouterProvider router={AppRouter} />
                </ThemeProvider>
                  </LanguageProvider>
    </StrictMode>,


)
