import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_aihealth_key_for_dev';

router.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;
    // Dummy authentication logic
    if (email && password) {
        const token = jwt.sign({ id: 'dummy-uuid', email, role: 'Super Admin' }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { email, role: 'Super Admin' } });
    } else {
        res.status(400).json({ error: 'Invalid credentials' });
    }
});

export default router;
