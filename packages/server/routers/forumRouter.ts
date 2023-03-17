import express from 'express';
import { commentController, topicController } from '../controllers';

const forumRouter: express.Router = express.Router();

forumRouter.use(express.json());
forumRouter.get('/topic/:id', topicController.getTopic);
forumRouter.get('/topic', topicController.getAllTopics);
forumRouter.post('/topic', topicController.createTopic);
forumRouter.delete('/topic/:id', topicController.deleteTopic);

forumRouter.get('/comment/:id', commentController.getComment);
forumRouter.get('/comment', commentController.getComments);
forumRouter.post('/comment', commentController.createComment);
forumRouter.delete('/comment/:id', commentController.deleteComment);

export default forumRouter;
