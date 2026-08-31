import { Router } from 'express';
import { getStaff, createStaff } from '../controllers/staffController';
import { authMiddleware, rbacMiddleware } from '../middlewares/auth';

const router = Router();
router.use(authMiddleware);
router.get('/', getStaff);
router.post('/', rbacMiddleware(['Super Admin', 'Hospital Administrator']), createStaff);
export default router;
