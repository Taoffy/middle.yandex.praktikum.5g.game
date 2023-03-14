import { Router } from 'express';
import { commentController, topicController } from '../controllers';

function forumRouter(apiRouter: Router) {
  const router: Router = Router();

  router.get('/topic/:id', topicController.getTopic);
  router.get('/topic', topicController.getAllTopics);
  router.post('/topic', topicController.createTopic);
  router.delete('/topic/:id', topicController.deleteTopic);

  router.get('/comment/:id', commentController.getComment);
  router.get('/comment', commentController.getComments);
  router.post('/comment', commentController.createComment);
  router.delete('/comment/:id', commentController.deleteComment);

  apiRouter.use('/forum', router);
}

export default forumRouter;
