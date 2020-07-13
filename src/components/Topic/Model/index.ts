export interface ITopic {
  id: number;
  title?: string;
  author?: string;
  author_id?: number;
  topic_pic?: string;
  description?: string;
  comments?: any[];
}

export interface Props {
  topicData?: ITopic;
  customStyles?: string;
}
