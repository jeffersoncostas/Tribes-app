import React from "react";
import { Container, Profile, Item } from "./styled";
import { Variants } from "framer-motion";
import ProfileJPG from "assets/images/profile-pic.jpg";
import { ReactComponent as ExpandIcon } from "assets/icons/expand.svg";

import Button from "components/Button";
import Icon from "components/Icon";
import { Props } from "./Models";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store/index";
import { useNavigate } from "react-router-dom";

const sidebarVariants: Variants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.07,
      delayChildren: 0.2,
      stiffness: 100,
      damping: 100,
      restDelta: 1,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      staggerChildren: 0.05,
      staggerDirection: -1,
      stiffness: 100,
      damping: 100,
      restDelta: 1,
    },
  },
};
const itemVariants: Variants = { open: { opacity: 1 }, closed: { opacity: 0 } };

const defaultItems = [{ icon: null, name: "Sair", url: "/logout" }];

const Sidebar: React.FC<Props> = (props) => {
  const { toggleSidebar } = props;
  const data = useSelector((state: ApplicationState) => state.user.data);
  const navigate = useNavigate();

  const handleItemClick = (url: string) => {
    console.log(url);
    toggleSidebar();
    navigate(url);
  };

  return (
    <Container variants={sidebarVariants}>
      <Profile.container>
        <Profile.pic src={ProfileJPG} />
        <Profile.name>André Silva</Profile.name>
        <Button>
          <ExpandIcon />
        </Button>
      </Profile.container>

      {data?.modules.map((item) => (
        <Item.container
          variants={itemVariants}
          onClick={() => handleItemClick(item.url)}
        >
          <Icon name={item.icon} />

          <Item.text>{item.name}</Item.text>
        </Item.container>
      ))}
      {defaultItems.map((item) => (
        <Item.container
          variants={itemVariants}
          onClick={() => handleItemClick(item.url)}
        >
          <Icon name={item.icon} />

          <Item.text>{item.name}</Item.text>
        </Item.container>
      ))}
    </Container>
  );
};

export default Sidebar;
