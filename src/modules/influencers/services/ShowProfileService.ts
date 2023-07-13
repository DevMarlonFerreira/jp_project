import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { IShowInfluencer } from '../domain/models/IShowInfluencer';
import { IInfluencersRepository } from '../domain/repositories/IInfluencersRepository';
import { IInfluencer } from '../domain/models/IInfluencer';

@injectable()
class ShowProfileService {
  constructor(
    @inject('InfluencersRepository')
    private influencersRepository: IInfluencersRepository,
  ) {}

  public async execute({ id }: IShowInfluencer): Promise<IInfluencer> {
    const user = await this.influencersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}

export default ShowProfileService;