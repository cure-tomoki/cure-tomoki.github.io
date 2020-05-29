const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssCustomProperties = require('postcss-custom-properties')
const postcssImport = require('postcss-import')

module.exports = {
  plugins: [
    postcssImport(),
    autoprefixer(),
    postcssCustomProperties(),
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }],
    }),
  ],
}
