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
    const influencers = await Influencer.find({}).lean();
    const result = {
      per_page: take,
      total: 1,
      current_page: page,
      data: influencers,
    };

    return result;
  }

  public async save(influencer: IInfluencer): Promise<IInfluencer> {
    const t = await Influencer.create(influencer);
    await t.save();

    return influencer;
  }

  public async findByEmail(email: string): Promise<IInfluencer | null> {
    const influencer = await Influencer.findOne({email: email}).select('_id').lean();

    return influencer;
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
