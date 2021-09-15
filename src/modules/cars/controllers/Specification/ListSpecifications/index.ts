import SpecificationRepository from '../../../repositories/Specification/SpecificationRepository';
import ListSpecificationsService from '../../../services/Specification/ListSpecificationsService';
import ListSpecificationsController from './ListSpecificationsController';

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationsService = new ListSpecificationsService(
  specificationRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsService
);

export default listSpecificationsController;
