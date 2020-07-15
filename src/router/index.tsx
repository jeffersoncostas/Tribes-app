import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "store/ducks/user";
import EntryApp from "pages/EntryApp";
import CreateThread from "components/CreateThread";

const Feed = lazy(() => import("pages/Feed"));
const Login = lazy(() => import("pages/Login"));
const Register = lazy(() => import("pages/Register"));
const Intro = lazy(() => import("pages/Intro"));

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    navigate("/login");
  });
  return <EntryApp />;
};

const Router = () => {
  return (
    <Suspense fallback={<EntryApp />}>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/feed" element={<Feed />}>
          <Route path="/create" element={<CreateThread />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
