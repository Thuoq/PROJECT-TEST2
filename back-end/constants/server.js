const SERVER_PORT = 2222;

const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: process.env.PORT || SERVER_PORT,
};

module.exports = SERVER_CONFIGS;