import { Request, Response } from 'express';

import CreateSpecificationService from '../../../services/Specification/CreateSpecificationService';

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  intermediate(request: Request, response: Response) {
    const { name, description } = request.body;

    const service = this.createSpecificationService.start({
      name,
      description
    });

    return response.status(200).json(service);
  }
}

export default CreateSpecificationController;
