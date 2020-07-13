import React, { useEffect } from "react";
import { Container, Footer } from "./styled";
import Button from "components/Button";
import { Topic } from "components/Topic";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "store";
import Icon from "components/Icon";
import { loadRequest as loadUser } from "store/ducks/user";
import { loadRequest as loadFeed } from "store/ducks/feed";
import checkLocalStorage from "utils/checkLocalStorage";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const data = useSelector((state: ApplicationState) => state.feed.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    checkLocalStorage(
      (isLogged) => !isLogged && navigate("/login", { replace: true })
    );
    dispatch(loadFeed());
  }, []);

  return (
    <Container>
      {data?.map((topic) => (
        <Topic topicData={topic} customStyles="margin-bottom:8px;" />
      ))}

      <Footer>
        <Button variant="rounded" onClick={() => dispatch(loadUser())}>
          <Icon name="plus" />
        </Button>
      </Footer>
    </Container>
  );
};

export default Feed;
