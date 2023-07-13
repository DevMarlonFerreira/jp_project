export interface ITokenProvider {
  generateToken(id: string): Promise<string>;
  verifyToken(id: string): Promise<string>;
}
