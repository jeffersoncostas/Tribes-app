import React, { useEffect, useState } from "react";
import { Container, Title, Empty, Backdrop } from "./styled";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import Button from "components/Button";
import { motion, useCycle, Variants, AnimatePresence } from "framer-motion";
import { Props } from "./Model";
import Sidebar from "components/Sidebar";
import { useSelector } from "react-redux";
import { ApplicationState } from "store";

const headerVariants: Variants = {
  open: { y: 0, opacity: 1 },
  closed: { y: "-100%", opacity: 0 },
};
const backdrop: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const Header: React.FC<Props> = (props) => {
  const { actionButton } = props;
  const user = useSelector((state: ApplicationState) => state.user.data);

  useEffect(() => {
    console.log(user);
    if (!user) {
      setOpenHeader(false);
      return;
    }

    setOpenHeader(true);
  }, [user]);

  const [isOpenHeader, setOpenHeader] = useState(false);
  const [isOpenMenu, toggleOpenMenu] = useCycle(false, true);

  return (
    <>
      <Container
        initial={false}
        animate={isOpenHeader ? "open" : "closed"}
        variants={headerVariants}
      >
        <Button onClick={() => toggleOpenMenu()}>
          <MenuIcon />
        </Button>

        <Title> Tópico 1 </Title>
        {!actionButton ? <Empty /> : actionButton}
      </Container>
      <motion.nav initial={false} animate={isOpenMenu ? "open" : "closed"}>
        <Sidebar toggleSidebar={toggleOpenMenu} />
        <AnimatePresence>
          {isOpenMenu && (
            <Backdrop
              initial="closed"
              variants={backdrop}
              animate="open"
              exit="closed"
              onClick={() => toggleOpenMenu()}
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Header;
