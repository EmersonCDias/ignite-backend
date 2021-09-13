import Category from '../models/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): boolean;
  list(): Category[];
}
