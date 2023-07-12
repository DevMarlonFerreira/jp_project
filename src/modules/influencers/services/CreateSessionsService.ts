import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { sign, Secret } from "jsonwebtoken";
import authConfig from "@config/auth";
import { ICreateSession } from "../domain/models/ICreateSession";
import { IInfluencerAuthenticated } from "../domain/models/IInfluencerAuthenticated";
import { IInfluencersRepository } from "../domain/repositories/IInfluencersRepository";
import { IHashProvider } from "../providers/HashProvider/models/IHashPovider";

@injectable()
class CreateSessionsService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IInfluencersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
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

    const token = sign({}, authConfig.jwt.secret as Secret, {
      subject: influencer._id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      influencer,
      token,
    };
  }
}

export default CreateSessionsService;
