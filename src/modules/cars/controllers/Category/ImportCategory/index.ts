import CategoryRepository from '../../../repositories/Category/CategoryRepository';
import ImportCategoriesService from '../../../services/Category/ImportCategoriesService';
import ImportCategoryController from './ImportCategoryController';

export default (): ImportCategoryController => {
  const categoryRepository = new CategoryRepository();
  const importCategoriesService = new ImportCategoriesService(
    categoryRepository
  );
  const importCategoryController = new ImportCategoryController(
    importCategoriesService
  );

  return importCategoryController;
};
