import {Router} from 'express';
import PatientRouter from './PatientRouter.js';
import ScheadulingRouter from './ScheadulingRouter.js';

const router = Router();

router.use(PatientRouter);
router.use(ScheadulingRouter);

export default router;

