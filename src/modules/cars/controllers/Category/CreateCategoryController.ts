import { Request, Response } from 'express';

import CreateCategoryService from '../../services/Category/CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const category = this.createCategoryService.execute({
      name,
      description
    });

    return response.status(200).json(category);
  }
}

export default CreateCategoryController;
