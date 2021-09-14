import { ISpecificationRepository } from '../../repositories/Specification/ISpecificationRepository';
import SpecificationModel from '../../models/Specification/SpecificationModel';

export interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): SpecificationModel {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) throw new Error('models already exists');

    return this.specificationRepository.create({
      name,
      description
    });
  }
}

export default CreateSpecificationService;
