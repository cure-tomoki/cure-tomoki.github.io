/* eslint-disable @typescript-eslint/no-var-requires */
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const package = require('./package.json');

const ENVS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

function useEsbuildMinify(config, options) {
  const terserIndex = config.optimization.minimizer.findIndex(
    (minimizer) => minimizer.constructor.name === 'TerserPlugin'
  );
  if (terserIndex > -1) {
    config.optimization.minimizer.splice(
      terserIndex,
      1,
      new ESBuildMinifyPlugin(options)
    );
  }
}

function useEsbuildLoader(config, options) {
  const jsLoader = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.js')
  );

  if (jsLoader) {
    jsLoader.use.loader = 'esbuild-loader';
    jsLoader.use.options = options;
  }
}

const useEnv = (p) => {
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
};

module.exports = (phase, { _defaultConfig }) => {
  return {
    env: {
      ENV: useEnv(phase),
      VERSION: package.version,
    },
    webpack: (config, { webpack }) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
          React: 'react',
        })
      );
      useEsbuildMinify(config);
      useEsbuildLoader(config, {
        loader: 'tsx',
        target: 'es2017',
      });

      return config;
    },
  };
};
