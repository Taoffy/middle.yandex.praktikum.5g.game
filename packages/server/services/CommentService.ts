import { Comment, User } from '../db';

class CommentService {
  comment: typeof Comment;

  constructor(model: typeof Comment) {
    this.comment = model;
  }

  async getAllComments(id_topic: string) {
    return this.comment.findAll({ where: { id_topic }, include: [User] });
  }

  async getComment(id: string) {
    return this.comment.findOne({ where: { id }, include: [User] });
  }

  async createComment(
    id: string,
    id_topic: string,
    text: string,
    id_author: string,
    date: string,
    likes: number
  ) {
    return this.comment.create({ id, id_topic, text, id_author, date, likes });
  }

  async deleteComment(id: string) {
    return this.comment.destroy({ where: { id } });
  }
}

const commentService = new CommentService(Comment);

export default commentService;
