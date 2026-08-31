import { Request, Response } from 'express';

const staff: any[] = [];
export const getStaff = async (req: Request, res: Response) => res.json({ success: true, data: staff });
export const createStaff = async (req: Request, res: Response) => {
    const newStaff = { id: crypto.randomUUID(), ...req.body, created_at: new Date() };
    staff.push(newStaff);
    res.status(201).json({ success: true, data: newStaff });
};
