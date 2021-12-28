import { inject, injectable } from 'tsyringe';

import { ICategoryRepository } from '../../../repositories/Category/ICategoryRepository';
import CategoryEntity from '../../../entities/CategoryEntity';

export interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoriesRepository: ICategoryRepository
  ) {}

  async start({ name, description }: IRequest): Promise<CategoryEntity> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists)
      throw new Error(`The category ${name} already exists!`);

    const category = await this.categoriesRepository.create({
      name,
      description
    });

    return category;
  }
}

export default CreateCategoryService;
