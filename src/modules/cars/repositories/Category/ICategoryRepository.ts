import CategoryEntity from '../../entities/CategoryEntity';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<CategoryEntity>;
  findByName(name: string): Promise<CategoryEntity>;
  list(): Promise<CategoryEntity[]>;
}
