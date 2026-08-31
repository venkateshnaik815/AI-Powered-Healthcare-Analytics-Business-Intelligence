import { Request, Response } from 'express';

const records: any[] = [];

export const getEHRs = async (req: Request, res: Response) => {
    res.json({ success: true, data: records });
};

export const createEHR = async (req: Request, res: Response) => {
    const newRecord = { id: crypto.randomUUID(), ...req.body, created_at: new Date() };
    records.push(newRecord);
    res.status(201).json({ success: true, data: newRecord });
};
