import { Request, Response } from 'express';

import CreateCategoryService from '../../../services/Category/CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  intermediate(request: Request, response: Response) {
    const { name, description } = request.body;

    const category = this.createCategoryService.start({
      name,
      description
    });

    return response.status(200).json(category);
  }
}

export default CreateCategoryController;
