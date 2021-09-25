import {
  ICreateSpecificationDTO,
  ISpecificationRepository
} from './ISpecificationRepository';
import SpecificationModel from '../../entities/SpecificationModel';

class SpecificationRepository implements ISpecificationRepository {
  private readonly specifications: SpecificationModel[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE)
      SpecificationRepository.INSTANCE = new SpecificationRepository();

    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): SpecificationModel {
    const specification = new SpecificationModel();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): boolean {
    return this.specifications.some(item => item.name === name);
  }

  list(): SpecificationModel[] {
    return this.specifications;
  }
}

export default SpecificationRepository;
