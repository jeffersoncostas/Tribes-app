import React, { useEffect } from "react";

import Router from "router";
import Header from "components/Header";
import Button from "components/Button";
import Icon from "components/Icon";
import GlobalStyle from "styled/GlobalStyle";

import CheckUserLogged from "components/CheckUserLogged";

const App = () => {
  return (
    <>
      <CheckUserLogged />
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
