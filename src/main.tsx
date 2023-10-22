import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { reatomContext } from '@reatom/npm-react';
import { ctx } from './ctx.ts';
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MANTINE_THEME } from './mantineTheme.ts';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={MANTINE_THEME}>
        <Notifications />
          <reatomContext.Provider value={ctx}>
            <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
        </reatomContext.Provider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
