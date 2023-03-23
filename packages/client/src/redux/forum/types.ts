import { User } from '../types';

export type ExistComment = Comment & {
  id: string;
  likes: number;
  User: User;
  createdAt: string;
};
export type Comment = {
  text: string;
  TopicId: string;
  UserId: string;
};
export type ExistTopic = Topic & {
  User: User;
  id: string;
  views: number;
  createdAt: string;
};
export type Topic = {
  title: string;
  description: string;
  UserId: string;
};

export type ForumState = {
  topics: Record<ExistTopic['id'], ExistTopic>;
  comments: Record<ExistTopic['id'], Record<ExistComment['id'], ExistComment>>;
};

export enum actionsType {
  setTopics = 'setTopics',
  setComments = 'setComments',
}

type setTopicsAction = {
  type: actionsType.setTopics;
  payload: ForumState['topics'];
};
export type setCommentsAction = {
  type: actionsType.setComments;
  payload: {
    idTopic: ExistTopic['id'];
    comments: Record<ExistComment['id'], ExistComment>;
  };
};

export type actions = setTopicsAction | setCommentsAction;
