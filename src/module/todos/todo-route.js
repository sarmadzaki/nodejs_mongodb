import { Router } from 'express';
import * as controller from './todo-controller';
const router = Router();

router.get('/todo', controller.getTodo);
router.post('/todo', controller.addTodo);
router.delete('/todo', controller.deleteTodo);
export { router };