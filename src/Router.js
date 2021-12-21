// Gestión de URL del cliente

// 1. Importaciones
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

import Profile from "./components/User/Profile";
import EditProfile from "./components/User/EditProfile";

import Countries from "./components/Countries";
import SingleCountry from "./components/Countries/Single";

import Places from "./components/Places";
import SinglePlace from "./components/Places/Single";
import CreatePlace from "./components/Places/Create";
import EditPlace from "./components/Places/Single/Edit";

import CountryState from "./context/Country/CountryState";
import PlaceState from "./context/Place/PlaceState";
import UserState from "./context/User/UserState";

import Auth from "./routes/Auth";
import Private from "./routes/Private";

// 2. Función
const Router = () => {
  return (
    <>
      <UserState>
        <PlaceState>
          <CountryState>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="register" element={<Auth component={Register} />} />
                  <Route path="login" element={<Auth component= {Login} />} />
                  <Route path="about" element={<About />} />
                  <Route path="countries" element={<Countries />} />
                  <Route path="countries/:id" element={<SingleCountry />} />
                  <Route path="places" element={<Places />} />
                  <Route path="places/create" element={<CreatePlace />} />
                  <Route path="places/:id" element={<SinglePlace />} />
                  <Route path="places/:id/edit" element={<EditPlace />} />
                  <Route path="profile" element={<Private component= {Profile} />} />
                  <Route path="profile/edit/:id" element={<EditProfile />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CountryState>
        </PlaceState>
      </UserState>
    </>
  );
};

// 3. Exportación
export default Router;
