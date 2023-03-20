import type { Request, Response } from 'express';

import { commentService } from '../services';

class CommentController {
  async getComments(req: Request, res: Response) {
    try {
      const TopicId = req.params.id_topic;
      const data = await commentService.getAllComments(TopicId);
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getComment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await commentService.getComment(id);
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async createComment(req: Request, res: Response) {
    try {
      const { TopicId, text, UserId } = req.body;
      const comment = await commentService.createComment(TopicId, text, UserId);
      res.send(comment);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async deleteComment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await commentService.deleteComment(id);
      res.status(200).json({ message: 'ok' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

const commentController = new CommentController();

export default commentController;
