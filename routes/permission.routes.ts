import { Router } from 'express';
import {
  GetPermission,
  SavePermission,
} from '../controllers/permission.controller';

const router = Router();

router.get('/', GetPermission);
router.post('/create', SavePermission);

export default router;
