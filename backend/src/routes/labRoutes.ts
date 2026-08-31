import { Router } from 'express';
import { getLabTests, createLabTest, updateLabTestResult } from '../controllers/labController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();
router.use(authMiddleware);
router.get('/', getLabTests);
router.post('/', createLabTest);
router.patch('/:id', updateLabTestResult);

export default router;
