import { ForumState, actions, actionsType } from './types';

const initialState: ForumState = {
  topics: {},
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
          [action.payload.idTopic]: {
            ...state.comments[action.payload.idTopic],
            ...action.payload.comments,
          },
        },
      };
    default:
      return state;
  }
};

export { forumReducer };
