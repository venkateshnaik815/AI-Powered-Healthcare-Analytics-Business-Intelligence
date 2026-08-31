import { Router } from 'express';
import { getClaims, submitClaim } from '../controllers/insuranceController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();
router.use(authMiddleware);
router.get('/', getClaims);
router.post('/', submitClaim);

export default router;
