import CategoryRepository from '../../../repositories/Category/CategoryRepository';
import ListCategoriesService from '../../../services/Category/ListCategoriesService';
import ListCategoriesController from './ListCategoriesController';

export default (): ListCategoriesController => {
  const categoryRepository = new CategoryRepository();
  const listCategoriesService = new ListCategoriesService(categoryRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesService
  );

  return listCategoriesController;
};
