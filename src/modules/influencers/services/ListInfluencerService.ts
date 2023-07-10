import { inject, injectable } from 'tsyringe';
import { IInfluencersRepository } from '../domain/repositories/IInfluencersRepository';
import { IInfluencerPaginate } from '../domain/models/IInfluencerPaginate';

interface SearchParams {
  page: number;
  limit: number;
}

@injectable()
class ListInfluencerService {
  constructor(
    @inject('InfluencersRepository')
    private influencersRepository: IInfluencersRepository,
  ) {}
  public async execute({
    page,
    limit,
  }: SearchParams): Promise<IInfluencerPaginate> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const influencers = await this.influencersRepository.findAll({
      page,
      skip,
      take,
    });

    return influencers;
  }
}

export default ListInfluencerService;