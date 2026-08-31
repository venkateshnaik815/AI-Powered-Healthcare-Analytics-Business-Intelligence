import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/authRoutes';
import patientRoutes from './routes/patientRoutes';
import appointmentRoutes from './routes/appointmentRoutes';
import ehrRoutes from './routes/ehrRoutes';
import staffRoutes from './routes/staffRoutes';
import labRoutes from './routes/labRoutes';
import pharmacyRoutes from './routes/pharmacyRoutes';
import billingRoutes from './routes/billingRoutes';
import insuranceRoutes from './routes/insuranceRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/appointments', appointmentRoutes);
app.use('/api/v1/ehr', ehrRoutes);
app.use('/api/v1/staff', staffRoutes);
app.use('/api/v1/labs', labRoutes);
app.use('/api/v1/pharmacy', pharmacyRoutes);
app.use('/api/v1/billing', billingRoutes);
app.use('/api/v1/insurance', insuranceRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'AIHealthAnalytics Backend API' });
});

app.listen(PORT, () => {
  console.log(Backend server running on port );
});
