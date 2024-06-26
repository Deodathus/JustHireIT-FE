import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";

import App from './App';
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ChakraProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>
);