import fs from 'fs';
import csvParse from 'csv-parse';

import CategoryRepository from '../../../repositories/Category/CategoryRepository';

class ImportCategoriesService {
  constructor(private categoryRepository: CategoryRepository) {}

  start(file: Express.Multer.File): any {
    const stream = fs.createReadStream(file.path);

    const parsedFile = csvParse();

    stream.pipe(parsedFile);

    parsedFile.on('data', async line => console.log('line', line));

    return parsedFile;
  }
}

export default ImportCategoriesService;
