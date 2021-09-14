import CategoryModel from '../../models/CategoryModel';
import { ICreateCategoryDTO, ICategoryRepository } from './ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  private readonly categories: CategoryModel[];

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE)
      CategoryRepository.INSTANCE = new CategoryRepository();

    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): CategoryModel {
    const category = new CategoryModel();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);

    return category;
  }

  findByName(name: string): boolean {
    return this.categories.some(item => item.name === name);
  }

  list(): CategoryModel[] {
    return this.categories;
  }
}

export default CategoryRepository;
