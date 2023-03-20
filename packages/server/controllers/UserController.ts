import type { Request, Response } from 'express';

import { userService } from '../services';

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const {
        id,
        login,
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
      const id = req.query.id;
      const data = await userService.findUser(id as string);
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

  async getTheme(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const data = await userService.findUser(id as string);
      const theme = data?.getDataValue('theme');
      res.send(theme);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

const userController = new UserController();

export default userController;
