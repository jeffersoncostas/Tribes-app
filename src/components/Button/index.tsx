import React from "react";
import { Props } from "./Model";
import { Default, Filled, Rounded } from "./styled";

const Button: React.FC<Props> = (props) => {
  const { variant } = props;

  switch (variant) {
    case "default":
      return <Default {...props} />;

    case "filled":
      return <Filled {...props} />;

    case "rounded":
      return <Rounded {...props} />;

    default:
      return <Default {...props} />;
  }
};

export default Button;
