import CategoryRepository from '../../../repositories/Category/CategoryRepository';
import ImportCategoriesService from '../../../services/Category/ImportCategoriesService';
import ImportCategoryController from './ImportCategoryController';

const categoryRepository = CategoryRepository.getInstance();
const importCategoriesService = new ImportCategoriesService(categoryRepository);
const importCategoryController = new ImportCategoryController(
  importCategoriesService
);

export default importCategoryController;
