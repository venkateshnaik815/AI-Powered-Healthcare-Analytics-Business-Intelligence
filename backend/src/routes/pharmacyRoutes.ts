import { Router } from 'express';
import { getInventory, addMedicine } from '../controllers/pharmacyController';
import { authMiddleware, rbacMiddleware } from '../middlewares/auth';

const router = Router();
router.use(authMiddleware);
router.get('/', getInventory);
router.post('/', rbacMiddleware(['Pharmacist', 'Super Admin']), addMedicine);

export default router;
