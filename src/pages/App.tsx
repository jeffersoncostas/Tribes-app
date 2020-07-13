import React, { useEffect } from "react";

import Router from "router";
import Header from "components/Header";
import Button from "components/Button";
import Icon from "components/Icon";
import GlobalStyle from "styled/GlobalStyle";
import { Provider } from "react-redux";
import store from "store";
import { useNavigate } from "react-router-dom";
import checkLocalStorage from "utils/checkLocalStorage";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    checkLocalStorage((isLogged) =>
      !isLogged
        ? navigate("/login", { replace: true })
        : navigate("/feed", { replace: true })
    );
  }, []);

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header
          actionButton={
            <Button>
              <Icon name="expand" />
            </Button>
          }
        />
        <Router />
      </Provider>
    </>
  );
};

export default App;
