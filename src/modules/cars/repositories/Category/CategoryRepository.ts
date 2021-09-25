import { getRepository, Repository } from 'typeorm';

import { ICreateCategoryDTO, ICategoryRepository } from './ICategoryRepository';
import CategoryEntity from '../../entities/CategoryEntity';

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<CategoryEntity>;

  constructor() {
    this.repository = getRepository(CategoryEntity);
  }

  async create({
    name,
    description
  }: ICreateCategoryDTO): Promise<CategoryEntity> {
    const category = this.repository.create({
      name,
      description
    });

    await this.repository.save(category);

    return category;
  }

  async findByName(name: string): Promise<CategoryEntity> {
    const category = await this.repository.findOne({ name });

    return category;
  }

  async list(): Promise<CategoryEntity[]> {
    const categories = await this.repository.find();

    return categories;
  }
}

export default CategoryRepository;
