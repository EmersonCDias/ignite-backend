import { Request, Response } from 'express';

import ImportCategoriesService from '../../../services/Category/ImportCategoriesService';

class ImportCategoryController {
  constructor(private importCategoryService: ImportCategoriesService) {}

  async intermediate(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const fileReturned = await this.importCategoryService.start(file);

    return response.status(200).json(fileReturned);
  }
}

export default ImportCategoryController;
