import React, { useEffect } from "react";
import { Container, Footer } from "./styled";
import Button from "components/Button";
import { Topic } from "components/Topic";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "store";
import Icon from "components/Icon";
import { loadRequest as loadFeed } from "store/ducks/feed";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Feed = () => {
  const data = useSelector((state: ApplicationState) => state.feed.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(loadFeed());
  }, []);

  const openCreateThread = () => {
    console.log("create thread");
    navigate("create", { replace: false });
  };
  const checkCreateIsOpen = () => {
    if (location.pathname.includes("/create")) return true;
    return false;
  };

  return (
    <Container>
      {data?.map((topic) => (
        <Topic topicData={topic} customStyles="margin-bottom:8px;" />
      ))}

      <Footer>
        <Button variant="rounded" onClick={() => openCreateThread()}>
          <Icon name="plus" />
        </Button>
      </Footer>
      <AnimatePresence>
        <motion.div animate={checkCreateIsOpen() ? "open" : "closed"}>
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Feed;
