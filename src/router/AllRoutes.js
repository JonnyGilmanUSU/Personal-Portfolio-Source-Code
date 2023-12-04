import React from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";
import { Routes, Route, Switch } from "react-router-dom";
import Login from "../components/Authentification";
import Authentification from "../components/Authentification";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route index={true} element={ <Authentification/> } />
        <Route path="/home" element={<HomeLight />} />
        <Route path="/home-light" element={<HomeLight />} />
        {/* <Route path="/rtl-home-light" element={<RtlHomeLight />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
