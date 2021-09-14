import { Router, Request, Response } from 'express';

import CreateSpecificationService from '../services/Specification/CreateSpecificationService';
import SpecificationRepository from '../repositories/Specification/SpecificationRepository';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateSpecificationService(
    specificationRepository
  );

  const service = createCategoryService.execute({
    name,
    description
  });

  return response.status(200).json(service);
});

specificationsRoutes.get('/', (request: Request, response: Response) => {
  const specifications = specificationRepository.list();

  return response.status(200).json(specifications);
});

export default specificationsRoutes;
