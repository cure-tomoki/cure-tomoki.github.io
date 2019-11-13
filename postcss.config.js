const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    postcssImport(),
    autoprefixer(),
    postcssCustomProperties(),
    cssnano({
      preset: [
        'default',
        { discardComments: { removeAll: true } },
      ],
    }),
  ],
};
