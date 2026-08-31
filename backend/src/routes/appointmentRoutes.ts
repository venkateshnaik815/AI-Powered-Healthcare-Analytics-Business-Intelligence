import { Router } from 'express';
import { getAppointments, createAppointment } from '../controllers/appointmentController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);
router.get('/', getAppointments);
router.post('/', createAppointment);

export default router;
