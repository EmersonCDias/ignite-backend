import { Router, Request, Response } from 'express';

import createSpecificationController from '../controllers/Specification/CreateSpecification';
import listSpecificationsController from '../controllers/Specification/ListSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request: Request, response: Response) =>
  createSpecificationController.intermediate(request, response)
);

specificationsRoutes.get('/', (request: Request, response: Response) =>
  listSpecificationsController.intermediate(request, response)
);

export default specificationsRoutes;
