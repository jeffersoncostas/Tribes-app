import React from "react";
import { Container, TopicImage, Info } from "./styled";
import { Props } from "./Model";
import TopicBG from "assets/images/topic-img.png";
import ProfilePic from "assets/images/jessicapng.png";
import Icon from "components/Icon";

export const Topic: React.FC<Props> = (props) => {
  const { topicData, customStyles } = props;
  const handleClickTopic = () => {
    console.log(topicData);
  };

  return (
    <Container onClick={handleClickTopic} customStyles={customStyles}>
      <TopicImage src={TopicBG} />
      <Info.container>
        <Info.titleComments>
          <Info.title> {topicData?.title} </Info.title>
          <Info.comment>
            <Icon name="comment" />

            {topicData?.comments?.length}
          </Info.comment>
        </Info.titleComments>
        <Info.userContainer>
          <Info.userPicture src={ProfilePic} />
          <Info.userName> {topicData?.author} </Info.userName>
        </Info.userContainer>
      </Info.container>
    </Container>
  );
};
