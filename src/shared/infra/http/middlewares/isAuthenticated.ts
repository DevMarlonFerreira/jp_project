import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { ITokenProvider } from "@modules/influencers/providers/TokenProvider/models/ITokenProvider";

@injectable()
class IsAuthenticated {
  constructor(
    @inject("TokenProvider")
    private tokenProvider: ITokenProvider,
    private request: Request,
    private next: NextFunction
  ) {}

  public async execute() {
    const authHeader = this.request.headers.authorization;

    if (!authHeader) {
      throw new AppError("Token is missing.");
    }
    try {
      const sub = await this.tokenProvider.verifyToken(authHeader);
      this.request.influencer = {
        id: sub,
      };

      return this.next();
    } catch {
      throw new AppError("Invalid JWT Token.");
    }
  }
}

export default IsAuthenticated;

// export default function isAuthenticated(
//   request: Request,
//   response: Response,
//   next: NextFunction
// ): void {
//   const authHeader = request.headers.authorization;

//   if (!authHeader) {
//     throw new AppError("JWT Token is missing.");
//   }
//   // Bearer sdlkfjsldkfjlsjfffdklfjdflksjflkjfdlk3405905
//   const [, token] = authHeader.split(" ");

//   try {
//     const decodedToken = verify(token, authConfig.jwt.secret);

//     const { sub } = decodedToken as ITokenPayload;

//     request.user = {
//       id: sub,
//     };

//     return next();
//   } catch {
//     throw new AppError("Invalid JWT Token.");
//   }
// }
