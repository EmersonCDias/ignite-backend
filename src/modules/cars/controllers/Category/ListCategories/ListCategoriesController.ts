import { Request, Response } from 'express';

import Index from '../../../services/Category/ListCategoriesService';

class ListCategoriesController {
  constructor(private listCategoriesService: Index) {}

  async intermediate(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoriesService.start();

    return response.status(200).json(categories);
  }
}

export default ListCategoriesController;
