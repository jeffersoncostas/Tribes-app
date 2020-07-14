import React, { useState, useEffect } from "react";
import { Container, Label, InputBase, MaxLengthContainer } from "./styled";
import { Props } from "./Model";

export const TextField: React.FC<Props> = (props) => {
  const {
    onChange = () => null,
    value,
    fullWidth,
    labelText,
    type = "text",
    labelCenter = false,
    customStyles,
    textArea = false,
    maxLength,
    placeholder,
  } = props;

  const [text, setText] = useState("");

  useEffect(() => {}, [text]);

  const handleOnChange = (e: any, value: any) => {
    onChange(e);
    setText((old) => {
      if (maxLength && old.length > maxLength) return old;
      return value;
    });
  };

  const MaxLength = () => (
    <MaxLengthContainer>
      {text.length}/{maxLength}
    </MaxLengthContainer>
  );

  const Default = () => (
    <Container customStyles={customStyles} fullWidth={fullWidth}>
      <Label labelCenter={labelCenter}>{labelText}</Label>
      <InputBase>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => handleOnChange(e, e.target.value)}
        />
      </InputBase>
      {maxLength && MaxLength()}
    </Container>
  );
  const TextArea = () => (
    <Container customStyles={customStyles} fullWidth={fullWidth}>
      <Label labelCenter={labelCenter}>{labelText}</Label>
      <InputBase>
        <textarea
          onChange={(e) => handleOnChange(e, e.target.value)}
          value={text}
          cols={50}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={3}
        />
      </InputBase>
      {maxLength && MaxLength()}
    </Container>
  );
  return <>{textArea ? TextArea() : Default()}</>;
};
