// Gestión de URL del cliente

// 1. Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";

import Countries from "./components/Countries";
import SingleCountry from "./components/Countries/Single";

import Places from "./components/Places";
import SinglePlace from "./components/Places/Single";
import CreatePlace from "./components/Places/Create";
import EditPlace from "./components/Places/Single/Edit";

import CountryState from "./context/Country/CountryState";
import PlaceState from "./context/Place/PlaceState";

// 2. Función
const Router = () => {
  return (
    <>
      <PlaceState>
        <CountryState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="countries" element={<Countries />} />
                <Route path="countries/:id" element={<SingleCountry />} />
                <Route path="places" element={<Places />} />
                <Route path="places/create" element={<CreatePlace />} />
                <Route path="places/:id" element={<SinglePlace />} />
                <Route path="places/:id/edit" element={<EditPlace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CountryState>
      </PlaceState>
    </>
  );
};

// 3. Exportación
export default Router;
