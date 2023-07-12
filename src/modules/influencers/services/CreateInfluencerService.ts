import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { IInfluencersRepository } from "../domain/repositories/IInfluencersRepository";
import { ICreateInfluencer } from "../domain/models/ICreateInfluencer";

import { IInfluencer } from "../domain/models/IInfluencer";
import { IHashProvider } from "../providers/HashProvider/models/IHashPovider";

@injectable()
class ListInfluencerService {
  constructor(
    @inject("InfluencersRepository")
    private influencersRepository: IInfluencersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}
  public async execute({
    name,
    email,
    password,
  }: ICreateInfluencer): Promise<IInfluencer> {
    const emailExists = await this.influencersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email address already used.");
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const influencers = await this.influencersRepository.save({
      name,
      email,
      password: hashedPassword,
    });

    return influencers;
  }
}

export default ListInfluencerService;
