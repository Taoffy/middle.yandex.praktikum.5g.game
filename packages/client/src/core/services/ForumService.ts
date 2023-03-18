import { AxiosResponse } from 'axios';
import { expressApi } from '../api';
import { BasicServiceClass } from './BasicService';
import {
  ExistComment,
  ExistTopic,
  Topic,
  Comment,
} from '../../redux/forum/types';

enum forumPath {
  comment = '/forum/comment',
  topic = '/forum/topic',
}

class ForumServiceClass extends BasicServiceClass {
  async getTopics() {
    const response = await expressApi.get<string, AxiosResponse<ExistTopic[]>>(
      forumPath.topic
    );
    return this.checkAnswer<ExistTopic[]>(response);
  }
  async getTopic(id: string) {
    const response = await expressApi.get<string, AxiosResponse<ExistTopic>>(
      `${forumPath.topic}/${id}`
    );
    return this.checkAnswer<ExistTopic>(response);
  }
  async addTopic(topic: Topic) {
    const response = await expressApi.post<
      string,
      AxiosResponse<ExistTopic>,
      Topic
    >(forumPath.topic, topic);
    return this.checkAnswer<ExistTopic>(response);
  }
  async getCommentsByTopic(idTopic: string) {
    const response = await expressApi.get<
      string,
      AxiosResponse<ExistComment[]>
    >(`${forumPath.comment}s/${idTopic}`);
    return this.checkAnswer<ExistComment[]>(response);
  }
  async addCommentsByTopic(comment: Comment, idTopic: string) {
    const response = await expressApi.post<
      string,
      AxiosResponse<ExistComment>,
      Comment
    >(`${forumPath.comment}/${idTopic}`, comment);
    return this.checkAnswer<ExistComment>(response);
  }
}

export const ForumService = new ForumServiceClass();
