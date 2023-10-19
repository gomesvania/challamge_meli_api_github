import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

router.use('/usuarios', userRoutes);

export default router;