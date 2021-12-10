import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Screens
import Home from "../screens/Home/index";
import AllAdmin from "../screens/Admin/index";
import AddAdmin from "../screens/Admin/add-admin";
import AddImageCategory from "../screens/ImageCategory/add-image-category";
import AllImageCategory from "../screens/ImageCategory/index";
import AddImageTypes from "../screens/ImageTypes/add-image-type";
import AllImageTypes from "../screens/ImageTypes/index";
import LogIn from '../screens/Login/index';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/admin/add" element={<AddAdmin />} />
      <Route exact path="/admin/all" element={<AllAdmin />} />
      <Route exact path="/image/category/all" element={<AllImageCategory />} />
      <Route exact path="/image/category/add" element={<AddImageCategory />} />
      <Route exact path="/image/type/add" element={<AddImageTypes />} />
      <Route exact path="/image/type/all" element={<AllImageTypes />} />
      <Route exact path="/login" element={<LogIn />} />
    </Routes>
  );
};
export default AuthRoutes;
