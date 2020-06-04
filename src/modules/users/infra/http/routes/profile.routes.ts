import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthentication';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profilerController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profilerController.show);
profileRouter.put('/', profilerController.update);

export default profileRouter;
