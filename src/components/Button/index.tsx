import React from "react";
import { Props } from "./Model";
import * as Buttons from "./styled";
import { ButtonVariants } from "./Model/index";

const buttonVariants: ButtonVariants = {
  default: Buttons.Default,
  filled: Buttons.Filled,
  rounded: Buttons.Rounded,
};

const Button: React.FC<Props> = (props) => {
  const { variant = "default", startIcon, children } = props;
  const VariantComponent = buttonVariants[variant];

  return (
    <VariantComponent {...props}>
      {startIcon} {children}
    </VariantComponent>
  );
};

export default Button;
