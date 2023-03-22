import { User } from '../db';

class UserService {
  user: typeof User;

  constructor(model: typeof User) {
    this.user = model;
  }

  async createUser(
    id: number,
    login: string,
    avatar: string,
    display_name: string,
    email: string,
    first_name: string,
    phone: string,
    second_name: string
  ) {
    return this.user.findOrCreate({
      where: {
        id,
      },
      defaults: {
        id,
        login,
        avatar,
        display_name,
        email,
        first_name,
        phone,
        second_name,
      },
    });
  }

  async findUser(id: string) {
    return this.user.findOne({ where: { id } });
  }

  async setTheme(id: string, theme: string) {
    return this.user.update({ theme }, { where: { id } });
  }
}

const userService = new UserService(User);

export default userService;
