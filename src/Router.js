// Gestión de URL del cliente

// 1. Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout"

// 2. Función
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

// 3. Exportación
export default Router