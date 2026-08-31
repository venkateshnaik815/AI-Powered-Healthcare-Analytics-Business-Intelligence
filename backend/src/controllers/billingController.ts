import { Request, Response } from 'express';

const invoices: any[] = [];

export const getInvoices = async (req: Request, res: Response) => res.json({ success: true, data: invoices });

export const generateInvoice = async (req: Request, res: Response) => {
    const invoice = { id: crypto.randomUUID(), ...req.body, status: 'Unpaid', created_at: new Date() };
    invoices.push(invoice);
    res.status(201).json({ success: true, data: invoice });
};
