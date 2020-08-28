const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const package = require('./package.json');

const ENVS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

module.exports = (phase, { _defaultConfig }) => {
  const ENV = ((p) => {
    console.info(`NEXT PHASE: ${p}`);
    switch (p) {
      case PHASE_DEVELOPMENT_SERVER:
        return ENVS.DEVELOPMENT;
      case PHASE_PRODUCTION_SERVER:
        return ENVS.PRODUCTION;
      default:
        console.warn('Invalid phase. Falling back to production.');
        return ENVS.PRODUCTION;
    }
  })(phase);

  // production
  return {
    env: {
      ENV,
      VERSION: package.version,
    },
  };
};
