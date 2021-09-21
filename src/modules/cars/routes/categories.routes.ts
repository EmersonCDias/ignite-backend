import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../controllers/Category/CreateCategory';
import listCategoriesController from '../controllers/Category/ListCategories';
import importCategoryController from '../controllers/Category/ImportCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp'
});

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.intermediate(request, response)
);

categoriesRoutes.get('/', (request, response) =>
  listCategoriesController.intermediate(request, response)
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  importCategoryController.intermediate(request, response)
);

export default categoriesRoutes;
