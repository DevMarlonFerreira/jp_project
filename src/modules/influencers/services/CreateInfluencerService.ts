import { inject, injectable } from "tsyringe";
import { IInfluencersRepository } from "../domain/repositories/IInfluencersRepository";
import { IInfluencer } from "../domain/models/IInfluencer";

@injectable()
class ListInfluencerService {
  constructor(
    @inject("InfluencersRepository")
    private influencersRepository: IInfluencersRepository
  ) {}
  public async execute(influencer: IInfluencer): Promise<IInfluencer> {
    const influencers = await this.influencersRepository.create(influencer);

    return influencers;
  }
}

export default ListInfluencerService;
