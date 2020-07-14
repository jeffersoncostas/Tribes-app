import React from "react";
import { Props, IconTypes } from "./Model";
import { ReactComponent as ExpandIcon } from "assets/icons/expand.svg";
import { ReactComponent as FeedIcon } from "assets/icons/feed.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chat.svg";
import { ReactComponent as NotificationIcon } from "assets/icons/notification.svg";
import { ReactComponent as FriendsIcon } from "assets/icons/friends.svg";
import { ReactComponent as CommentIcon } from "assets/icons/comment.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";

const iconTypes: IconTypes = {
  expand: ExpandIcon,
  feed: FeedIcon,
  chat: ChatIcon,
  notification: NotificationIcon,
  friends: FriendsIcon,
  comment: CommentIcon,
  plus: PlusIcon,
};

const Icon: React.FC<Props> = (props) => {
  const { name } = props;
  if (!name) return null;
  let IconComponent = iconTypes[name];
  return <IconComponent {...props} />;
};

export default Icon;
