const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    open: false,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    // port: 4545,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    }
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch-index'),
    config.module
      .rule('vue')
        .use('vue-loader')
          .tap(args => {
            args.compilerOptions.whitespace = 'preserve'
          })
  },
  productionSourceMap: false,
  assetsDir: './assets/',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/assets/img', to: 'assets/img' },
        { from: 'src/assets/fonts', to: 'assets/fonts' }
      ])
    ]
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '/ordenes-servicio/' : '/'
}
