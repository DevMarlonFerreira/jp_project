import { container } from 'tsyringe';

import { IInfluencersRepository } from '@modules/influencers/domain/repositories/IInfluencersRepository';
// import InfluencersRepository from '@modules/influencers/infra/typeorm/repositories/InfluencersRepository';
import InfluencersRepository from '@modules/influencers/infra/mongoose/repositories/InfluencersRepository';

import '@modules/influencers/providers';

// import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';
// import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';



// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
// import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';

container.registerSingleton<IInfluencersRepository>(
  'InfluencersRepository',
  InfluencersRepository,
);

