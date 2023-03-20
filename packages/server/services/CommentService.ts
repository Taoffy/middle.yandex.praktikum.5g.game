import { Comment, User } from '../db';

class CommentService {
  comment: typeof Comment;

  constructor(model: typeof Comment) {
    this.comment = model;
  }

  async getAllComments(TopicId: string) {
    return this.comment.findAll({
      where: { TopicId },
      include: [User],
    });
  }

  async getComment(id: string) {
    return this.comment.findOne({ where: { id }, include: [User] });
  }

  async createComment(TopicId: string, text: string, UserId: string) {
    const comment = await this.comment.create({
      text,
      TopicId,
      UserId,
    });
    return this.getComment(comment.id);
  }

  async deleteComment(id: string) {
    return this.comment.destroy({ where: { id } });
  }
}

const commentService = new CommentService(Comment);

export default commentService;
