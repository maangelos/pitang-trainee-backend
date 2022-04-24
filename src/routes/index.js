import {Router} from 'express';
import Controller from '../controllers/Controller.js';

const controller = new Controller();

const router = Router();

router.get('/patients', controller.index);
router.get('/patient/:id', controller.getOne);
router.post('/patient', controller.store);
router.put('/patient/:id', controller.update);

export default router;

