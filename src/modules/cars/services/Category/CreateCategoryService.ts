import { ICategoryRepository } from '../../repositories/Category/ICategoryRepository';
import CategoryModel from '../../models/CategoryModel';

export interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {}

  start({ name, description }: IRequest): CategoryModel {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error('CategoryModel already exists');

    return this.categoriesRepository.create({
      name,
      description
    });
  }
}

export default CreateCategoryService;
