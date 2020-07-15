import React, { useRef } from "react";
import { Container, Modal } from "./styled";
import { useNavigate } from "react-router-dom";
import ProfilePic from "assets/images/jessicapng.png";
import { TextField } from "components/Input";
import { Variants } from "framer-motion";
import { useDimensions } from "hooks/use-dimensions";
import { Backdrop } from "styled/shared";

const modalVariants: Variants = {
  open: (height) => ({
    scale: 1,
  }),
  closed: {
    scale: 0,
  },
};
const backdrop: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const CreateThread = () => {
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const handleClose = () => {
    navigate("/feed");
  };
  return (
    <Container>
      <Modal.container
        variants={modalVariants}
        ref={containerRef}
        custom={height}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <Modal.row customStyles="margin-bottom:40px">
          <Modal.userContainer>
            <Modal.userPicture src={ProfilePic} />
            <Modal.userName> Andre Silva</Modal.userName>
          </Modal.userContainer>
          <TextField labelCenter labelText="titulo" />
        </Modal.row>
        <Modal.row customStyles="">
          <TextField
            labelCenter
            textArea
            maxLength={256}
            labelText="descrição"
          />
        </Modal.row>
      </Modal.container>
      <Backdrop
        initial="closed"
        animate="open"
        exit="closed"
        variants={backdrop}
        onClick={handleClose}
      />
    </Container>
  );
};

export default CreateThread;
