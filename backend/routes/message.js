import e from 'express';
import { send, receive } from '../controllers/message.js';
import protectRoute from '../middleware/protectRoute.js';

const router = e.Router();

router.get('/:id', protectRoute, receive);
router.post('/send/:id', protectRoute, send);

export default router;
