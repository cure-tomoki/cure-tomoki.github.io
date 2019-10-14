const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssImport(),
    autoprefixer(),
    cssnano({
      preset: [
        'default',
        { discardComments: { removeAll: true } },
      ],
    }),
  ],
};
