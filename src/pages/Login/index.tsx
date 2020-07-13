import React, { useState } from "react";
import { Container, FormContainer } from "./styled";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { TextField } from "components/Input";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadRequest as loadUser } from "store/ducks/user";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loadUser());
    localStorage.setItem("user_id", "0");
    navigate("/feed");
  };
  return (
    <Container>
      <Logo />
      <FormContainer>
        <TextField
          fullWidth
          labelText="email"
          value={loginData.email}
          onChange={(evt) =>
            setLoginData({ ...loginData, email: evt.target.value })
          }
          customStyles="margin-bottom:20px"
        />
        <TextField
          fullWidth
          labelText="senha"
          type="password"
          value={loginData.password}
          onChange={(evt) =>
            setLoginData({ ...loginData, password: evt.target.value })
          }
          customStyles="margin-bottom:20px"
        />

        <Button fullWidth variant="filled" onClick={handleLogin}>
          LOGIN
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
