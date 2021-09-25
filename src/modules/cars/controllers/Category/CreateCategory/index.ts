import CategoryRepository from '../../../repositories/Category/CategoryRepository';
import CreateCategoryService from '../../../services/Category/CreateCategoryService';
import CreateCategoryController from './CreateCategoryController';

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoryRepository();
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryService
  );

  return createCategoryController;
};
