import { Router } from 'express';
import {
  getTeam,
  saveTeam,
  update,
  deleteTeam,
} from '../controllers/team.controller';

const router = Router();

router.get('/get', getTeam);
router.post('/create', saveTeam);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteTeam);

export default router;
