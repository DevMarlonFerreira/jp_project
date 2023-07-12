export interface IJwtProvider {
  sign(config: object, secret: string, payload: object): Promise<string>;
}
