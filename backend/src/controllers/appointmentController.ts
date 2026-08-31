import { Request, Response } from 'express';

const appointments: any[] = [];

export const getAppointments = async (req: Request, res: Response) => {
    res.json({ success: true, data: appointments });
};

export const createAppointment = async (req: Request, res: Response) => {
    const newAppt = { id: crypto.randomUUID(), ...req.body, status: 'Scheduled', created_at: new Date() };
    appointments.push(newAppt);
    res.status(201).json({ success: true, data: newAppt });
};
