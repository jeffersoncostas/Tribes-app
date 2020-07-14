import React, { useEffect } from "react";

import Router from "router";
import Header from "components/Header";
import Button from "components/Button";
import Icon from "components/Icon";
import GlobalStyle from "styled/GlobalStyle";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import checkLocalStorage from "utils/checkLocalStorage";
import { loadRequest as loadUser } from "../store/ducks/user/index";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    checkLocalStorage((isLogged) =>
      !isLogged ? navigate("/login", { replace: true }) : getUser()
    );
  }, []);

  const getUser = () => {
    navigate("/feed", { replace: true });
    dispatch(loadUser());
  };
  return (
    <>
      <GlobalStyle />
      <Header
        actionButton={
          <Button>
            <Icon name="expand" />
          </Button>
        }
      />
      <Router />
    </>
  );
};

export default App;
