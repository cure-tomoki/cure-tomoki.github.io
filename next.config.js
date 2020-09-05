const withPrefresh = require('@prefresh/next');
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

  return {
    env: {
      ENV,
      VERSION: package.version,
    },
    // webpack
    ...withPrefresh({
      webpack: (config, { dev, isServer }) => {
        // Move Preact into the framework chunk instead of duplicating in routes:
        const splitChunks =
          config.optimization && config.optimization.splitChunks;
        if (splitChunks) {
          const cacheGroups = splitChunks.cacheGroups;
          const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
          if (cacheGroups.framework) {
            cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
              test,
            });
            // if you want to merge the 2 small commons+framework chunks:
            // cacheGroups.commons.name = 'framework';
          }
        }

        if (isServer) {
          // mark `preact` stuffs as external for server bundle to prevent duplicate copies of preact
          config.externals.push(
            /^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/
          );
        }

        // Install webpack aliases:
        const aliases = config.resolve.alias || (config.resolve.alias = {});
        aliases.react = aliases['react-dom'] = 'preact/compat';

        // Automatically inject Preact DevTools:
        if (dev && !isServer) {
          const entry = config.entry;
          config.entry = () =>
            entry().then((entries) => {
              entries['main.js'] = ['preact/debug'].concat(
                entries['main.js'] || []
              );
              return entries;
            });
        }

        return config;
      },
    }),
  };
};
