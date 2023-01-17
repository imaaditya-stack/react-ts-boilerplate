import logdown from 'logdown';

// eslint-disable-next-line complexity
export const getLogger = (namespace?: string) => {
  const logger = logdown(namespace || 'app');
  logger.state.isEnabled = localStorage.getItem('debug') === '*' ? true : false;
  return logger;
};
