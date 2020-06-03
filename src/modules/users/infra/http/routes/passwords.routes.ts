import { Router } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordsRouter = Router();
const forgotPasswordsController = new ForgotPasswordController();
const resetPasswordsController = new ResetPasswordController();

passwordsRouter.post('/forgot', forgotPasswordsController.create);
passwordsRouter.post('/reset', resetPasswordsController.create);

export default passwordsRouter;
