import { Request, Response } from 'express';

import ListCategoriesService from '../../../services/Category/ListCategoriesService';

class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  intermediate(request: Request, response: Response) {
    const categories = this.listCategoriesService.start();

    return response.status(200).json(categories);
  }
}

export default ListCategoriesController;
