import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Feed from "../pages/Feed";
import EntryApp from "pages/EntryApp";
import Login from "pages/Login";
import CreateThread from "components/CreateThread";
import { useDispatch } from "react-redux";
import { logoutUser } from "store/ducks/user";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("user_id");
    dispatch(logoutUser());
    navigate("/login");
  });
  return null;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/loading" element={<EntryApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/feed" element={<Feed />}>
        <Route path="/create" element={<CreateThread />} />
      </Route>
    </Routes>
  );
};

export default Router;
