import { sign, Secret, verify } from "jsonwebtoken";
import { ITokenProvider } from "../models/ITokenProvider";
import authConfig from "@config/auth";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

class JwtProvider implements ITokenProvider {
  public async generateToken(id: string): Promise<string> {
    const token = sign({}, authConfig.jwt.secret as Secret, {
      subject: id,
      expiresIn: authConfig.jwt.expiresIn,
    });
    return token;
  }

  public async verifyToken(authHeader: string): Promise<string> {
    const [, token] = authHeader.split(" ");
    const decodedToken = verify(token, authConfig.jwt.secret as Secret);

    const { sub } = decodedToken as ITokenPayload;
    return sub;
  }
}

export default JwtProvider;
