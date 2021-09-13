import CategoriesRepository from '../repositories/CategoriesRepository';
import Category from '../models/Category';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error('Category already exists');

    return this.categoriesRepository.create({
      name,
      description
    });
  }
}

export default CreateCategoryService;
