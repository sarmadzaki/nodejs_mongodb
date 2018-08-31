import { Router } from 'express';
import * as controller from './auth-controller';

const router = Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/email-verification',controller.emailVerification);
router.get('/logout', controller.logout);

export { router };