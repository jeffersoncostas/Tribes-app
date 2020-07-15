import React from "react";
import { ContainerLogin, FooterLink } from "styled/shared";
import { Logo, FormContainer, ButtonRow } from "./styled";
import { TextField } from "components/Input";
import Button from "components/Button";
import Icon from "components/Icon";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadRequest as loadUser } from "store/ducks/user";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(loadUser());
    localStorage.setItem("token", "0");
    navigate("/intro");
  };
  return (
    <ContainerLogin customStyles="padding-top:21px">
      <Logo />
      <FormContainer>
        <TextField
          labelText="nome"
          fullWidth
          customStyles="margin-bottom:20px"
        />
        <TextField
          labelText="sobrenome"
          fullWidth
          customStyles="margin-bottom:20px"
        />
        <TextField
          labelText="username"
          fullWidth
          customStyles="margin-bottom:20px"
        />
        <TextField
          labelText="email"
          fullWidth
          customStyles="margin-bottom:20px"
          type="email"
        />
        <TextField
          labelText="senha"
          fullWidth
          customStyles="margin-bottom:20px"
          type="password"
        />
        <TextField
          labelText="digite a senha novamente"
          fullWidth
          customStyles="margin-bottom:20px"
          type="password"
        />
      </FormContainer>
      <ButtonRow>
        <Button variant="filled"> cadastrar </Button>
        <Button
          variant="filled"
          customStyles="background:#3A5998; &:active{background:#29406f}"
          onClick={handleRegister}
          startIcon={<Icon name="facebook" />}
        >
          sign in
        </Button>
      </ButtonRow>
      <FooterLink to="/login">
        Já possui uma conta? <u>Faça login</u>
      </FooterLink>
    </ContainerLogin>
  );
};

export default Register;
