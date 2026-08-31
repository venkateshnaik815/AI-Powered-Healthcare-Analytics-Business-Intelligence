import { Request, Response } from 'express';

const labTests: any[] = [];

export const getLabTests = async (req: Request, res: Response) => {
    res.json({ success: true, data: labTests });
};

export const createLabTest = async (req: Request, res: Response) => {
    const newTest = { id: crypto.randomUUID(), ...req.body, status: 'Pending', created_at: new Date() };
    labTests.push(newTest);
    res.status(201).json({ success: true, data: newTest });
};

export const updateLabTestResult = async (req: Request, res: Response) => {
    const testId = req.params.id;
    const testIndex = labTests.findIndex(t => t.id === testId);
    if (testIndex === -1) return res.status(404).json({ error: 'Lab test not found' });
    
    labTests[testIndex] = { ...labTests[testIndex], ...req.body, status: 'Completed', updated_at: new Date() };
    res.json({ success: true, data: labTests[testIndex] });
};
