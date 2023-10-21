import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { reatomContext } from '@reatom/npm-react';
import { ctx } from './ctx.ts';
import "@mantine/core/styles.css";
import { MANTINE_THEME } from './mantineTheme.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={MANTINE_THEME}>
        <reatomContext.Provider value={ctx}>
            <App />
        </reatomContext.Provider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
