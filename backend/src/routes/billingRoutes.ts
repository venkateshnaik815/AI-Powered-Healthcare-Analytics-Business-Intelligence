import { Router } from 'express';
import { getInvoices, generateInvoice } from '../controllers/billingController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();
router.use(authMiddleware);
router.get('/', getInvoices);
router.post('/', generateInvoice);

export default router;
