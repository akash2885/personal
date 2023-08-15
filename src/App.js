import React from "react";
import theme from "./components/theme";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/experience" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
