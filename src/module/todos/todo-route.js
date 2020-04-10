import { Router } from 'express';
import * as controller from './todo-controller';
import { checkAuthorization } from './todo-middlewares';
const {
    addTodo,
    getTodo,
    deleteTodo,
    updateTodo,
} = controller;
const router = Router();

router.get('/todo', checkAuthorization, getTodo);
router.post('/todo', checkAuthorization, addTodo);
router.delete('/todo', checkAuthorization, deleteTodo);
router.put('/todo', checkAuthorization, updateTodo);
export { router };