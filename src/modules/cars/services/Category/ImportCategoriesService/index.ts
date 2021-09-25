import fs from 'fs';
import csvParse from 'csv-parse';

import CategoryRepository from '../../../repositories/Category/CategoryRepository';
import CategoryEntity from '../../../entities/CategoryEntity';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoriesService {
  constructor(private categoryRepository: CategoryRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parsedFile = csvParse();

      stream.pipe(parsedFile);

      parsedFile
        .on('data', line => {
          const [name, description] = line;

          categories.push({
            name,
            description
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);

          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async start(file: Express.Multer.File): Promise<CategoryEntity[] | void> {
    const categoriesLoaded = await this.loadCategories(file);

    categoriesLoaded.map(async category => {
      const { name } = category;

      const categoryExists = await this.categoryRepository.findByName(name);

      if (!categoryExists) {
        const categories = await this.categoryRepository.create({
          ...category
        });

        return categories;
      }

      return null;
    });
  }
}

export default ImportCategoriesService;
