import CategoryRepository from '../../repositories/Category/CategoryRepository';
import CreateCategoryService from '../../services/Category/CreateCategoryService';
import CreateCategoryController from '../../controllers/Category/CreateCategoryController';

export const categoriesRepository = new CategoryRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export default createCategoryController;
