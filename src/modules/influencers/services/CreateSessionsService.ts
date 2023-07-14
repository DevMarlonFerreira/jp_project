import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { ICreateSession } from "../domain/models/ICreateSession";
import { IInfluencerAuthenticated } from "../domain/models/IInfluencerAuthenticated";
import { IInfluencersRepository } from "../domain/repositories/IInfluencersRepository";
import { IHashProvider } from "../providers/HashProvider/models/IHashPovider";
import { ITokenProvider } from "../providers/TokenProvider/models/ITokenProvider";

@injectable()
class CreateSessionsService {
  constructor(
    @inject("InfluencersRepository")
    private influencersRepository: IInfluencersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,

    @inject("TokenProvider")
    private tokenProvider: ITokenProvider
  ) {}

  public async execute({
    email,
    password,
  }: ICreateSession): Promise<IInfluencerAuthenticated> {
    const influencer = await this.influencersRepository.findByEmail(email);

    if (!influencer) {
      throw new AppError("Incorrect email/password combination.", 401);
    }
    const passwordConfirmed = await this.hashProvider.compareHash(
      password,
      influencer.password
    );
    if (!passwordConfirmed) {
      throw new AppError("Incorrect email/password combination.", 401);
    }

    const id = influencer._id.toString();
    const name = influencer.name;

    const token = await this.tokenProvider.generateToken(id);
    return {
      name,
      token,
    };
  }
}

export default CreateSessionsService;
