import {Router} from 'express';
import ScheadulingController from '../controllers/SchedualingController.js';

const scheadulingController = new ScheadulingController();

const router = Router();

router.get('/scheaduling', scheadulingController.index.bind(scheadulingController));
router.get('/scheaduling/:id', scheadulingController.getOne.bind(scheadulingController));
router.post('/scheaduling', scheadulingController.store.bind(scheadulingController));
router.put('/scheaduling/:id', scheadulingController.update.bind(scheadulingController));

export default router;