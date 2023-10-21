import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { reatomContext } from '@reatom/npm-react';
import { ctx } from './ctx.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <reatomContext.Provider value={ctx}>
        <App />
      </reatomContext.Provider>
    </MantineProvider>
  </React.StrictMode>
);
