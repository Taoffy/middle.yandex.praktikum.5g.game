import express from 'express';
import { commentController, topicController } from '../controllers';

const topicRouter: express.Router = express.Router();

topicRouter.use(express.json());
topicRouter.get('/topic/:id', topicController.getTopic);
topicRouter.get('/topic', topicController.getAllTopics);
topicRouter.post('/topic', topicController.createTopic);
topicRouter.delete('/topic/:id', topicController.deleteTopic);

topicRouter.get('/comment/:id', commentController.getComment);
topicRouter.get('/comments/:id_topic', commentController.getComments);
topicRouter.post('/comment', commentController.createComment);
topicRouter.delete('/comment/:id', commentController.deleteComment);

export default topicRouter;
