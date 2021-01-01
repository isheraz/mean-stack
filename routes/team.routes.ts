import { Router } from 'express';
const router = Router();
import teamController from '../controllers/team.controller';

router.get('/get', teamController.getTeam);
router.post('/create', teamController.saveTeam);
router.put('/update/:id', teamController.update);
router.delete('/delete/:id', teamController.delete);

export default router;
