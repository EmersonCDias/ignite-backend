import { Router } from 'express';

import createCategoryController from '../controllers/Category/CreateCategory';
import listCategoriesController from '../controllers/Category/ListCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.intermediate(request, response)
);

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.intermediate(request, response)
);

export default categoriesRoutes;
