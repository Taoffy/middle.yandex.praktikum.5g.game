import type { Request, Response } from 'express';
import { topicService } from '../services';

class TopicController {
  async getAllTopics(_req: Request, res: Response) {
    try {
      const data = await topicService.getAllTopics();
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getTopic(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const data = await topicService.getTopic(id as string);

      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async createTopic(req: Request, res: Response) {
    try {
      const { id, title, description, id_author, date, views } = req.body;
      await topicService.createTopic(
        id,
        title,
        description,
        id_author,
        date,
        views
      );
      res.status(200).json({ message: 'ok' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async deleteTopic(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await topicService.deleteTopic(id);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

const topicController = new TopicController();

export default topicController;
