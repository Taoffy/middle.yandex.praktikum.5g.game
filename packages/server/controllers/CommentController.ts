import type { Request, Response } from 'express';

import { commentService } from '../services';

class CommentController {
  async getComments(req: Request, res: Response) {
    try {
      const { id_topic } = req.body;
      const data = await commentService.getAllComments(id_topic);
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getComment(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { id } = req.params.id;
      const data = await commentService.getComment(id);
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async createComment(req: Request, res: Response) {
    try {
      const { id, id_topic, text, id_author, date, likes } = req.body;
      await commentService.createComment(
        id,
        id_topic,
        text,
        id_author,
        date,
        likes
      );
      res.status(200).json({ message: 'ok' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async deleteComment(req: Request, res: Response) {
    try {
      //@ts-ignore
      const { id } = req.params.id;
      await commentService.deleteComment(id);
      res.status(200).json({ message: 'ok' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

const commentController = new CommentController();

export default commentController;
