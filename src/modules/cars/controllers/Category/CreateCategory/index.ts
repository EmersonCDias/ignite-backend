import CategoryRepository from '../../../repositories/Category/CategoryRepository';
import CreateCategoryService from '../../../services/Category/CreateCategoryService';
import CreateCategoryController from './CreateCategoryController';

const categoriesRepository = CategoryRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export default createCategoryController;
