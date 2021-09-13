import Category from '../models/Category';
import {
  ICreateCategoryDTO,
  ICategoriesRepository
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private readonly categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();

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

  list(): Category[] {
    return this.categories;
  }
}

export default CategoriesRepository;
