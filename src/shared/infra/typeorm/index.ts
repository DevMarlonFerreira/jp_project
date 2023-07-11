import logger from '@config/logger';
import { dataSource } from './ormconfig';

export const connect = dataSource
  .initialize()
  .then(() => {
    logger.info('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });