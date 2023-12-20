import { Router } from 'express';
import { homeRoutes } from './home.routes';

const router = Router();

router.use("/home", homeRoutes);

export { router };