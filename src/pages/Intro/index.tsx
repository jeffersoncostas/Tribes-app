import React, { useState } from "react";
import { ContainerLogin } from "styled/shared";
import {
  Logo,
  SlideContainer,
  Info,
  SlideControl,
  SelectedTopics,
} from "./styled";
import Button from "components/Button";
import Icon from "components/Icon";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Search from "components/Search";
import { useNavigate } from "react-router-dom";
import { TopicItem } from "styled/shared";
import TopicIcon from "assets/icons/topic-icon.png";

const slideVariants: Variants = {
  initial: { opacity: 0, x: "100%" },
  active: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-100%" },
};

const arrayTest = [0, 0, 0, 0];
const Intro = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();

  const handleNextSlide = () => {
    let nextSlide = activeIndex + 1;
    console.log(slides().length);
    if (nextSlide >= slides().length) goToProfile();
    setActiveIndex(nextSlide);
  };
  const goToProfile = () => {
    console.log("going to my profile");
    navigate("/profile");
  };

  const slides = () => [
    <SlideContainer
      key={0}
      variants={slideVariants}
      initial="initial"
      animate="active"
      exit="exit"
    >
      <Logo />
      <Info.container>
        <Info.title> Qual sua tribo ?</Info.title>
        <Info.description>
          Para começar a usar seu perfil, primeiro nos informe sobre o que você
          curte.
        </Info.description>
      </Info.container>
    </SlideContainer>,
    <SlideContainer
      key={1}
      variants={slideVariants}
      initial="initial"
      animate="active"
      exit="exit"
    >
      <Search fullWidth />
      <SelectedTopics>
        {arrayTest.map((item, i) => (
          <TopicItem.container customStyles="margin-bottom:7px;">
            <TopicItem.icon src={TopicIcon} />
            <TopicItem.name>Lorem ipsum</TopicItem.name>
            <Icon name="delete" />
          </TopicItem.container>
        ))}
      </SelectedTopics>
    </SlideContainer>,
  ];
  return (
    <ContainerLogin customStyles="padding:21px;justify-content:center;overflow:hidden;">
      <AnimatePresence>
        <motion.div animate={true} style={{ width: "100%" }}>
          {slides().map((item, index) => index === activeIndex && item)}
        </motion.div>
      </AnimatePresence>
      <SlideControl>
        <Button variant="rounded" onClick={handleNextSlide}>
          <Icon name="right-arrow" />
        </Button>
      </SlideControl>
    </ContainerLogin>
  );
};

export default Intro;
