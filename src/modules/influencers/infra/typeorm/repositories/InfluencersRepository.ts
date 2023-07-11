import { Repository } from 'typeorm';
import Influencer from '../entities/Influencer';
import { IInfluencersRepository } from '@modules/influencers/domain/repositories/IInfluencersRepository';
// import { ICreateCustomer } from '@modules/customers/domain/models/ICreateCustomer';
import { dataSource } from '@shared/infra/typeorm/ormconfig';
import { SearchParams } from '../../../domain/repositories/IInfluencersRepository';
import { IInfluencerPaginate } from '@modules/influencers/domain/models/IInfluencerPaginate';

class InfluencersRepository implements IInfluencersRepository {
  private ormRepository: Repository<Influencer>;
  constructor() {
    this.ormRepository = dataSource.getRepository(Influencer);
  }

//   public async create({ name, email }: ICreateCustomer): Promise<Customer> {
//     const customer = this.ormRepository.create({ name, email });

//     await this.ormRepository.save(customer);

//     return customer;
//   }

  public async save(influencer: Influencer): Promise<Influencer> {
    await this.ormRepository.save(influencer);

    return influencer;
  }

  public async findByName(name: string): Promise<Influencer | null> {
    const influencer = await this.ormRepository.findOneBy({
      name,
    });

    return influencer;
  }

  public async findById(id: string): Promise<Influencer | null> {
    const influencer = await this.ormRepository.findOneBy({
      _id: id,
    });

    return influencer;
  }

  public async findByEmail(email: string): Promise<Influencer | null> {
    const influencer = await this.ormRepository.findOneBy({
      email,
    });

    return influencer;
  }

  public async remove(influencer: Influencer): Promise<void> {
    await this.ormRepository.remove(influencer);
  }

  public async findAll({
    page,
    skip,
    take,
  }: SearchParams): Promise<IInfluencerPaginate> {
    const [influencers, count] = await this.ormRepository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: influencers,
    };

    return result;
  }
}

export default InfluencersRepository;
