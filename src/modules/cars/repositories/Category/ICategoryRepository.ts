import CategoryModel from '../../models/CategoryModel';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): CategoryModel;
  findByName(name: string): boolean;
  list(): CategoryModel[];
}
