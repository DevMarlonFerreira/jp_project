import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { sign, Secret } from "jsonwebtoken";
import authConfig from "@config/auth";
import { ICreateSession } from "../domain/models/ICreateSession";
import { IInfluencerAuthenticated } from "../domain/models/IInfluencerAuthenticated";
import { IInfluencersRepository } from "../domain/repositories/IInfluencersRepository";
import { IHashProvider } from "../providers/HashProvider/models/IHashPovider";
import { ITokenProvider } from "../providers/TokenProvider/models/ITokenProvider";

@injectable()
class CreateSessionsService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IInfluencersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,

    @inject("TokenProvider")
    private tokenProvider: ITokenProvider
  ) {}

  public async execute({
    email,
    password,
  }: ICreateSession): Promise<IInfluencerAuthenticated> {
    const influencer = await this.usersRepository.findByEmail(email);

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

    const token = await this.tokenProvider.generateToken(influencer._id);

    return {
      influencer,
      token,
    };
  }
}

export default CreateSessionsService;
