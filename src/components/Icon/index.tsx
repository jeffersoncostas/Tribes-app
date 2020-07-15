import React from "react";
import { Props, IconTypes } from "./Model";
import { ReactComponent as ExpandIcon } from "assets/icons/expand.svg";
import { ReactComponent as FeedIcon } from "assets/icons/feed.svg";
import { ReactComponent as ChatIcon } from "assets/icons/chat.svg";
import { ReactComponent as NotificationIcon } from "assets/icons/notification.svg";
import { ReactComponent as FriendsIcon } from "assets/icons/friends.svg";
import { ReactComponent as CommentIcon } from "assets/icons/comment.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook-logo.svg";
import { ReactComponent as RightArrowIcon } from "assets/icons/right-arrow.svg";
import { ReactComponent as ExpandIosIcon } from "assets/icons/expand-ios.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";

const iconTypes: IconTypes = {
  expand: ExpandIcon,
  feed: FeedIcon,
  chat: ChatIcon,
  notification: NotificationIcon,
  friends: FriendsIcon,
  comment: CommentIcon,
  plus: PlusIcon,
  facebook: FacebookIcon,
  "right-arrow": RightArrowIcon,
  "expand-ios": ExpandIosIcon,
  delete: DeleteIcon,
};

const Icon: React.FC<Props> = (props) => {
  const { name } = props;
  if (!name) return null;
  let IconComponent = iconTypes[name];
  return <IconComponent {...props} />;
};

export default Icon;
