import { IInfluencer } from './IInfluencer';

export interface IInfluencerPaginate {
  per_page: number;
  total: number;
  current_page: number;
  data: IInfluencer[];
}