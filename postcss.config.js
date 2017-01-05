module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-partial-import')({
      path: 'src/styles'
    }),
    require('postcss-advanced-variables')(),
    require('postcss-extend')()
  ]
}
