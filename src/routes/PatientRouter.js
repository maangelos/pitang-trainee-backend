import {Router} from 'express';
import PatientController from '../controllers/PatientController.js';

const patientController = new PatientController();

const router = Router();

router.get('/patient', patientController.index.bind(patientController));
router.get('/patient/:id', patientController.getOne.bind(patientController));
router.post('/patient', patientController.store.bind(patientController));
router.put('/patient/:id', patientController.update.bind(patientController));

export default router;