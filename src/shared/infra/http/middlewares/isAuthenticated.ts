import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import { ITokenProvider } from "@modules/influencers/providers/TokenProvider/models/ITokenProvider";
import { Secret, verify } from "jsonwebtoken";
import authConfig from "@config/auth";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token is missing.");
  }
  // Bearer sdlkfjsldkfjlsjfffdklfjdflksjflkjfdlk3405905
  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret);

    const { sub } = decodedToken as ITokenPayload;

    request.influencer = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError("Invalid Token.");
  }
}

// @injectable()
// class IsAuthenticated {
//   constructor(
//     private request: Request,
//     private response: Response,
//     private next: NextFunction,

//     @inject("TokenProvider")
//     private tokenProvider: ITokenProvider,
//   ) {}

//   public async execute() {
//     const authHeader = this.request.headers.authorization;

//     if (!authHeader) {
//       throw new AppError("Token is missing.");
//     }
//     try {
//       const sub = await this.tokenProvider.verifyToken(authHeader);
//       this.request.influencer = {
//         id: sub,
//       };

//       return this.next();
//     } catch {
//       throw new AppError("Invalid JWT Token.");
//     }
//   }
// }

// export default IsAuthenticated;
