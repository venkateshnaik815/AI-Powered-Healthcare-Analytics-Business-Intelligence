import { Request, Response } from 'express';

const inventory: any[] = [];

export const getInventory = async (req: Request, res: Response) => res.json({ success: true, data: inventory });

export const addMedicine = async (req: Request, res: Response) => {
    const medicine = { id: crypto.randomUUID(), ...req.body, created_at: new Date() };
    inventory.push(medicine);
    res.status(201).json({ success: true, data: medicine });
};
