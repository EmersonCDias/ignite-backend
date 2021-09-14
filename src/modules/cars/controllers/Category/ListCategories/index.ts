import CategoryRepository from '../../../repositories/Category/CategoryRepository';
import ListCategoriesService from '../../../services/Category/ListCategoriesService';
import ListCategoriesController from './ListCategoriesController';

const categoryRepository = CategoryRepository.getInstance();
const listCategoriesService = new ListCategoriesService(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

export default listCategoriesController;
