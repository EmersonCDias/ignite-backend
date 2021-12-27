import { container } from 'tsyringe';

import { ICategoryRepository } from '../../modules/cars/repositories/Category/ICategoryRepository';
import CategoryRepository from '../../modules/cars/repositories/Category/CategoryRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
);
