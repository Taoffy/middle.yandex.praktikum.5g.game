export type ExistComment = Comment & {
  id: string;
  likes: number;
};
export type Comment = {
  id: string;
  likes: number;
  id_topic: string;
  text: string;
  author: string;
  id_author: string;
  date: string;
};
export type ExistTopic = Topic;
export type Topic = {
  id: string;
  views: number;
  title: string;
  description: string;
  author: string;
  id_author: string;
  date: string;
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
