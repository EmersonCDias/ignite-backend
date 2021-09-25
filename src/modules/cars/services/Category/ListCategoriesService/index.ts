import { ICategoryRepository } from '../../../repositories/Category/ICategoryRepository';
import CategoryEntity from '../../../entities/CategoryEntity';

class ListCategoriesService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async start(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export default ListCategoriesService;
