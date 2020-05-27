import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthentication';
import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController';
import AvatarController from '../controllers/AvatarController';

const usersRouter = Router();
const usersControllers = new UsersController();
const avatarControllers = new AvatarController();
const upload = multer(uploadConfig);

usersRouter.post('/', usersControllers.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  avatarControllers.create,
);

export default usersRouter;
