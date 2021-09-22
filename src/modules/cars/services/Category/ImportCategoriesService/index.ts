import fs from 'fs';
import csvParse from 'csv-parse';

import CategoryRepository from '../../../repositories/Category/CategoryRepository';

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
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async start(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(category => {
      const { name } = category;

      const existCategory = this.categoryRepository.findByName(name);

      if (!existCategory) this.categoryRepository.create({ ...category });

      return null;
    });
  }
}

export default ImportCategoriesService;
