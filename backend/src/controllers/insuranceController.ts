import { Request, Response } from 'express';

const claims: any[] = [];

export const getClaims = async (req: Request, res: Response) => res.json({ success: true, data: claims });

export const submitClaim = async (req: Request, res: Response) => {
    const claim = { id: crypto.randomUUID(), ...req.body, status: 'Submitted', created_at: new Date() };
    claims.push(claim);
    res.status(201).json({ success: true, data: claim });
};
