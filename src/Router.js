// Gestión de URL del cliente

// 1. Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout"
import Home from "./components/Home";

// 2. Función
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

// 3. Exportación
export default Router