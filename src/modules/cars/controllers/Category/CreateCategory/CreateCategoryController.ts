import { Request, Response } from 'express';

import Index from '../../../services/Category/CreateCategoryService';

class CreateCategoryController {
  constructor(private createCategoryService: Index) {}

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
