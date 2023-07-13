import { IInfluencer } from "../models/IInfluencer";
import { ICreateInfluencer } from "../models/ICreateInfluencer";

import { IInfluencerPaginate } from "../models/IInfluencerPaginate";

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IInfluencersRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IInfluencerPaginate>;
  // findByName(name: string): Promise<IInfluencer | null>;
  findById(id: string): Promise<IInfluencer | null>;
  findByEmail(email: string): Promise<IInfluencer | null>;
  // create(data: ICreateInfluencer): Promise<IInfluencer>;
  save(influencer: ICreateInfluencer): Promise<IInfluencer>;
  //   remove(customer: ICustomer): Promise<void>;
}
