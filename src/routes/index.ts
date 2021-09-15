import { Router } from 'express';

import categoriesRoutes from '../modules/cars/routes/categories.routes';
import specificationsRoutes from '../modules/cars/routes/services.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationsRoutes);

export default routes;
