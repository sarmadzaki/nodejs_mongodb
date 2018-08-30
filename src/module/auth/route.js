import { Router } from 'express';
import * as controller from './controller';

const router = Router();

router.post('/login', controller.login);

export { router };