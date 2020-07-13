import { ITopic } from "components/Topic/Model";

export enum FeedStateTypes {
  REQUEST = "@feed/REQUEST",
  SUCESS = "@feed/SUCESS",
  FAILURE = "@feed/FAILURE",
}
export interface IFeedState {
  data: ITopic[] | null;
  loading: boolean;
  error: boolean;
}
