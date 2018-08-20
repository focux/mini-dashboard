import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'styled-components';
import mainTheme from './theme/mainTheme';
import AppRouter from './routers/AppRouter';
import './theme/styleGlobal';

const jsx = (
    <ThemeProvider theme={mainTheme}>
        <AppRouter />
    </ThemeProvider>
);

ReactDOM.render(jsx, document.getElementById("app"));
