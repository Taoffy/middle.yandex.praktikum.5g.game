import { AxiosResponse } from 'axios';
import { myApi } from '../api';
import { BasicServiceClass } from './BasicService';
import {
  ExistComment,
  ExistTopic,
  Topic,
  Comment,
} from '../../redux/forum/types';

enum forumPath {
  comment = '/comment',
  topic = '/topic',
}

class ForumServiceClass extends BasicServiceClass {
  async getTopics() {
    const response = await myApi.get<string, AxiosResponse<ExistTopic[]>>(
      forumPath.topic
    );
    return this.checkAnswer<ExistTopic[]>(response);
  }
  async addTopic(topic: Topic) {
    const response = await myApi.post<string, AxiosResponse<ExistTopic>, Topic>(
      forumPath.topic,
      topic
    );
    return this.checkAnswer<ExistTopic>(response);
  }
  async getCommentsByTopic(idTopic: string) {
    const response = await myApi.get<string, AxiosResponse<ExistComment[]>>(
      `${forumPath.comment}/${idTopic}`
    );
    return this.checkAnswer<ExistComment[]>(response);
  }
  async addCommentsByTopic(comment: Comment, idTopic: string) {
    const response = await myApi.post<
      string,
      AxiosResponse<ExistComment>,
      Comment
    >(`${forumPath.comment}/${idTopic}`, comment);
    return this.checkAnswer<ExistComment>(response);
  }
}

export const ForumService = new ForumServiceClass();
