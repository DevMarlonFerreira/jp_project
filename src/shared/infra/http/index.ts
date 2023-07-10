import logger from '@config/logger';
require('@config/process');
import { SetupServer } from './server';

(async (): Promise<void> => {
  try {
    const server = new SetupServer(3000);
    await server.init();
    await server.start();
  } catch (error) {
    logger.error(`App encerrado com erro: ${error}`);
    process.exit(1);
  }
})();