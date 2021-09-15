import { Request, Response } from 'express';

import ListSpecificationsService from '../../../services/Specification/ListSpecificationsService';

class ListSpecificationsController {
  constructor(private listSpecificationsService: ListSpecificationsService) {}

  intermediate(request: Request, response: Response) {
    const specifications = this.listSpecificationsService.start();

    return response.status(200).json(specifications);
  }
}

export default ListSpecificationsController;
