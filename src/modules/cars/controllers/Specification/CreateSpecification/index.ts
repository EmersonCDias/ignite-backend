import SpecificationRepository from '../../../repositories/Specification/SpecificationRepository';
import CreateSpecificationService from '../../../services/Specification/CreateSpecificationService';
import CreateSpecificationController from './CreateSpecificationController';

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export default createSpecificationController;
