export interface IUserSettings {
  notification: {
    new_messages: boolean;
    new_friends: boolean;
    topics_answer: boolean;
  };
  customize: boolean;
}
export interface IUserModules {
  icon: string;
  name: string;
  url: string;
}
export interface IUser {
  id: number;
  name: string;
  last_name: string;
  username: string;
  email: string;
  settings: IUserSettings;
  modules: IUserModules[];
}

export enum UserStateTypes {
  REQUEST = "@user/REQUEST",
  SUCESS = "@user/SUCESS",
  FAILURE = "@user/FAILURE",
  LOGOUT = "@user/LOGOUT",
}
export interface IUserState {
  data: IUser | null;
  loading: boolean;
  error: boolean;
}
