import type { Request, Response } from 'express';

import { userService } from '../services';

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const {
        id,
        login,
        theme,
        avatar,
        display_name,
        email,
        first_name,
        phone,
        second_name,
      } = req.body;
      await userService.createUser(
        id,
        login,
        theme,
        avatar,
        display_name,
        email,
        first_name,
        phone,
        second_name
      );
      res.status(200).json({ message: 'ok' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async findUser(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const data = await userService.findUser(id);
      res.send(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async setTheme(req: Request, res: Response) {
    try {
      const { id, theme } = req.body;
      await userService.setTheme(id, theme);
      res.status(200).json({ message: 'ok' });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

const userController = new UserController();

export default userController;
