import { ForumService } from '../../core/services/ForumService';
import { AppDispatch } from '../store';
import {
  ForumState,
  Topic,
  actionsType,
  setCommentsAction,
  Comment,
} from './types';

export const getTopics = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ForumService.getTopics();

      const responseObject: ForumState['topics'] = {};
      response.forEach((cur) => {
        responseObject[cur.id] = cur;
      });
      dispatch({
        type: actionsType.setTopics,
        payload: responseObject,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
export const getTopic = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ForumService.getTopic(id);

      const responseObject = {
        [response.id]: response,
      };
      dispatch({
        type: actionsType.setTopics,
        payload: responseObject,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const addTopic = (topic: Topic) => {
  return async (dispatch: AppDispatch) => {
    try {
      await ForumService.addTopic(topic);

      const responseObject = {
        [topic.id]: topic,
      };
      dispatch({
        type: actionsType.setTopics,
        payload: responseObject,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
export const getComments = (idTopic: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ForumService.getCommentsByTopic(idTopic);
      const responseObject: setCommentsAction['payload']['comments'] = {};
      response.forEach((cur) => {
        responseObject[cur.id] = cur;
      });
      dispatch({
        type: actionsType.setComments,
        payload: {
          idTopic: idTopic,
          comments: responseObject,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
};
export const addComment = (comment: Comment) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ForumService.addCommentsByTopic(
        comment,
        comment.id_topic
      );
      console.log(response);
      const responseObject = {
        [comment.id]: comment,
      };
      dispatch({
        type: actionsType.setComments,
        payload: {
          idTopic: response.id_topic,
          comments: responseObject,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
};
