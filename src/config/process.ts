import logger from '@config/logger';

enum ExitStatus {
  Failure = 1,
  Success = 0,
}

process.on('unhandledRejection', (reason, promise) => {
  logger.error(
    `App encerrado com unhandled promise: ${promise} and reason: ${reason}`,
  );
  throw reason;
});

process.on('uncaughtException', error => {
  logger.error(`App encerrado com uncaught exception: ${error}`);
  process.exit(ExitStatus.Failure);
});

process.on('SIGTERM', error => {
  logger.error(`App encerrado com SIGTERM: ${error}`);
  process.exit(ExitStatus.Failure);
});