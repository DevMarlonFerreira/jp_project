import pino from 'pino';

export default pino({
  enabled: process.env.LOGGER_ENABLED as unknown as boolean,
  level: 'info',
});