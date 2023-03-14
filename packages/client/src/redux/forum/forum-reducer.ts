import { ForumState, actions, actionsType } from './types';

const initialState: ForumState = {
  topics: {
    '1': {
      id: '1',
      title: 'Тема 1',
      description: 'описание',
      author: 'anton',
      id_author: '1',
      date: '02.04.1998',
      views: 27,
    },
    '2': {
      id: '2',
      title: 'Тема 2',
      description: 'описание',
      author: 'anton',
      id_author: '1',
      date: '02.04.1998',
      views: 27,
    },
    '3': {
      id: '3',
      title: 'Тема 3',
      description: 'описание',
      author: 'anton',
      id_author: '1',
      date: '02.04.1998',
      views: 27,
    },
  },
  comments: {},
};

const forumReducer = (state = initialState, action: actions) => {
  switch (action.type) {
    case actionsType.setTopics:
      return {
        ...state,
        topics: {
          ...state.topics,
          ...action.payload,
        },
      };
    case actionsType.setComments:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.idTopic]: action.payload.comments,
        },
      };
    default:
      return state;
  }
};

export { forumReducer };
