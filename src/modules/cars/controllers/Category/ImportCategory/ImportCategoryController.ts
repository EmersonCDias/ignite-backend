import { Request, Response } from 'express';

import ImportCategoriesService from '../../../services/Category/ImportCategoriesService';

class ImportCategoryController {
  constructor(private importCategoryService: ImportCategoriesService) {}

  intermediate(request: Request, response: Response): Response {
    const { file } = request;

    const fileReturned = this.importCategoryService.start(file);

    return response.send(fileReturned);
  }
}

export default ImportCategoryController;
