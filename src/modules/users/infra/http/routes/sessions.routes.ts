import { Router } from 'express';
import { container } from 'tsyringe';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsControllers = new SessionsController();

sessionsRouter.post('/', sessionsControllers.create);

export default sessionsRouter;
