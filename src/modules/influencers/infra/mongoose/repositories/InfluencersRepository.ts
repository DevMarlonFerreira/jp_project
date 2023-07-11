import { IInfluencersRepository } from "@modules/influencers/domain/repositories/IInfluencersRepository";
import { SearchParams } from "../../../domain/repositories/IInfluencersRepository";
import { IInfluencerPaginate } from "@modules/influencers/domain/models/IInfluencerPaginate";
import Influencer from "../entities/Influencer";
import logger from "@config/logger";
import { IInfluencer } from "@modules/influencers/domain/models/IInfluencer";

class InfluencersRepository implements IInfluencersRepository {
  public async findAll({
    page,
    skip,
    take,
  }: SearchParams): Promise<IInfluencerPaginate> {
    const influencers = await Influencer.find({});
    logger.info(influencers);
    const result = {
      per_page: take,
      total: 1,
      current_page: page,
      data: influencers,
    };
    return result;
  }

  public async create(influencer: IInfluencer): Promise<any> {
    await Influencer.create(influencer);

    return null;
  }


  // public async findAll2({
  //   page,
  //   skip,
  //   take,
  // }: SearchParams): Promise<IInfluencerPaginate> {
  //   const [customers, count] = await this.ormRepository
  //     .createQueryBuilder()
  //     .skip(skip)
  //     .take(take)
  //     .getManyAndCount();

  //   const result = {
  //     per_page: take,
  //     total: count,
  //     current_page: page,
  //     data: customers,
  //   };

  //   return result;
  // }
}

export default InfluencersRepository;
