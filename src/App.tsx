import React from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme/theme";
import MainUI from "./pages/main";

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <MainUI />
        </ThemeProvider>
    );
}

export default App;
