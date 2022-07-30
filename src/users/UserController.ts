import express, { Request, Response } from 'express';

const router = express.Router();


router.post('/create', (req: Request, res: Response) => {
    console.log(req.body);
    return res.send('');
})

export default router;