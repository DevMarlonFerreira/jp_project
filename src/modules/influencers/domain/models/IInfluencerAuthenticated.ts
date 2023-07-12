import { IInfluencer } from "./IInfluencer";

export interface IInfluencerAuthenticated {
  influencer: IInfluencer;
  token: string;
}
