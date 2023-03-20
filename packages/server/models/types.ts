export interface IComment {
  id?: string;
  text: string;
  likes: number;
}

export interface ITopic {
  id?: string;
  title: string;
  description: string;
  views: number;
}

export interface IUser {
  theme: string;
  avatar: string | null;
  display_name: string | null;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
}
