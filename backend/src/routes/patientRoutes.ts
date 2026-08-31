import { Router } from 'express';
import { getPatients, getPatientById, createPatient } from '../controllers/patientController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);
router.get('/', getPatients);
router.get('/:id', getPatientById);
router.post('/', createPatient);

export default router;
