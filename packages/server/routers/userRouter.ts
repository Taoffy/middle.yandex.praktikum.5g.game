import express from 'express';
import { userController } from '../controllers';

const userRouter: express.Router = express.Router();

userRouter.get('/user', userController.findUser);
userRouter.post('/create-user', userController.createUser);
userRouter.post('set-theme', userController.setTheme);
userRouter.get('/get-theme', userController.getTheme);

export default userRouter;
