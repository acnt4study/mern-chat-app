import e from 'express';
import { getUsers } from '../controllers/users.js';
import protectRoute from '../middleware/protectRoute.js';

const router = e.Router();

router.get('/', protectRoute, getUsers);

export default router;
