import {Router} from 'express';
import PatientController from '../controllers/PatientController.js';
import ScheadulingController from '../controllers/SchedualingController.js';

const patientController = new PatientController();
const scheadulingController = new ScheadulingController();

const router = Router();

router.get('/patient', patientController.index.bind(patientController));
router.get('/patient/:id', patientController.getOne.bind(patientController));
router.post('/patient', patientController.store.bind(patientController));
router.put('/patient/:id', patientController.update.bind(patientController));

router.get('/scheaduling', scheadulingController.index.bind(scheadulingController));
router.get('/scheaduling/:id', scheadulingController.getOne.bind(scheadulingController));
router.post('/scheaduling', scheadulingController.store.bind(scheadulingController));
router.put('/scheaduling/:id', scheadulingController.update.bind(scheadulingController));

export default router;

