import { container } from 'tsyringe';

// import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';
// import CustomersRepository from '@modules/customers/infra/typeorm/repositories/CustomersRepository';

import { IInfluencersRepository } from '@modules/influencers/domain/repositories/IInfluencersRepository';
import InfluencersRepository from '@modules/influencers/infra/typeorm/repositories/InfluencersRepository';


// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
// import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';

container.registerSingleton<InfluencersRepository>(
  'CustomersRepository',
  InfluencersRepository,
);

