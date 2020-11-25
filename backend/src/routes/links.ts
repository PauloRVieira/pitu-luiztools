import { Router} from 'express';
import linksCrontroller from '../controllers/links';

const router = Router();

router.post('/links', linksCrontroller.postLink);

router.get('/links/:code', linksCrontroller.hitLink);

router.get('/links/:code/stats', linksCrontroller.getLink);

export default router;