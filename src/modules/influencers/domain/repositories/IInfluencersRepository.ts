import { IInfluencer } from '../models/IInfluencer';
import { IInfluencerPaginate } from '../models/IInfluencerPaginate';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IInfluencersRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IInfluencerPaginate>;
  findByName(name: string): Promise<IInfluencer | null>;
  findById(id: string): Promise<IInfluencer | null>;
  findByEmail(email: string): Promise<IInfluencer | null>;
//   create(data: ICreateCustomer): Promise<ICustomer>;
//   save(customer: ICustomer): Promise<ICustomer>;
//   remove(customer: ICustomer): Promise<void>;
}