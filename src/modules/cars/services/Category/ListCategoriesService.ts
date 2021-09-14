import { ICategoryRepository } from '../../repositories/Category/ICategoryRepository';
import CategoryModel from '../../models/CategoryModel';

class ListCategoriesService {
  constructor(private categoryRepository: ICategoryRepository) {}

  start(): CategoryModel[] {
    return this.categoryRepository.list();
  }
}

export default ListCategoriesService;
