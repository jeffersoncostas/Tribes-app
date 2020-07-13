import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import EntryApp from "pages/EntryApp";
import Login from "pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/loading" element={<EntryApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
};

export default Router;
