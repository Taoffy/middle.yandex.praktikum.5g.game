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
    const topic = await this.topic.findOne({
      where: {
        id,
      },
      include: [User],
    });
    if (topic) {
      this.topic.update(
        {
          // @ts-ignore
          views: topic.views + 1,
        },
        {
          where: {
            id: topic.id,
          },
        }
      );
    }
    return topic;
  }

  async createTopic(
    title: string,
    description: string,
    UserId: number,
    date: string
  ) {
    return this.topic.create({
      title,
      description,
      date,
      UserId,
    });
  }

  async deleteTopic(id: string) {
    return this.topic.destroy({ where: { id } });
  }
}

const topicService = new TopicService(Topic);

export default topicService;
