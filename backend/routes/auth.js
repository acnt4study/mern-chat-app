import e from 'express';
import { signup, login, logout } from '../controllers/auth.js';

const router = e.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout', logout);

export default router;
