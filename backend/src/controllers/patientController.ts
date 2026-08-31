import { Request, Response } from 'express';

// Mock DB for now, would be replaced by actual pg queries in enterprise
const patients: any[] = [];

export const getPatients = async (req: Request, res: Response) => {
    res.json({ success: true, data: patients });
};

export const getPatientById = async (req: Request, res: Response) => {
    const patient = patients.find(p => p.id === req.params.id);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json({ success: true, data: patient });
};

export const createPatient = async (req: Request, res: Response) => {
    const newPatient = { id: crypto.randomUUID(), ...req.body, created_at: new Date() };
    patients.push(newPatient);
    res.status(201).json({ success: true, data: newPatient });
};
