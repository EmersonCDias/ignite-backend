import { ISpecificationRepository } from '../../repositories/Specification/ISpecificationRepository';
import SpecificationModel from '../../entities/SpecificationModel';

export interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  start({ name, description }: IRequest): SpecificationModel {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error(`The specification ${name} already exists!`);

    return this.specificationRepository.create({
      name,
      description
    });
  }
}

export default CreateSpecificationService;
