import { Router } from 'express';

import createCategoryController, {
  categoriesRepository
} from '../instances/Category/CategoryInstance';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});

export default categoriesRoutes;
