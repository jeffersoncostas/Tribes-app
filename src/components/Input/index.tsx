import React from "react";
import { Container, Label, InputBase } from "./styled";
import { Props } from "./Model";

export const TextField: React.FC<Props> = (props) => {
  const {
    onChange,
    value,
    fullWidth,
    labelText,
    type = "text",
    customStyles,
  } = props;
  return (
    <Container customStyles={customStyles} fullWidth={fullWidth}>
      <Label>{labelText}</Label>
      <InputBase>
        <input type={type} onChange={onChange} />
      </InputBase>
    </Container>
  );
};
