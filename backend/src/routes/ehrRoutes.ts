import { Router } from 'express';
import { getEHRs, createEHR } from '../controllers/ehrController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();
router.use(authMiddleware);
router.get('/', getEHRs);
router.post('/', createEHR);
export default router;
