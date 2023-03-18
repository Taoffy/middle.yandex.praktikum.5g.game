import { Topic, User } from '../db';

class TopicService {
  topic: typeof Topic;

  constructor(model: typeof Topic) {
    this.topic = model;
  }

  async getAllTopics() {
    return this.topic.findAll();
  }

  async getTopic(id: string) {
    console.log(id);

    return this.topic.findOne({
      where: {
        id,
      },
      include: [User],
    });
  }

  async createTopic(
    id: string,
    title: string,
    description: string,
    id_author: string,
    date: string,
    views: number
  ) {
    await this.topic.create({ id, title, description, id_author, date, views });
  }

  async deleteTopic(id: string) {
    return this.topic.destroy({ where: { id } });
  }
}

const topicService = new TopicService(Topic);

export default topicService;
