module.exports = {
  plugins: [
    require('postcss-import')({
      path: 'src/styles'
    }),
    require('postcss-nested'),
    require('postcss-advanced-variables')(),
    require('postcss-extend')(),
    require('autoprefixer')
  ]
}
