import path from 'path'
import webpack from 'webpack'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const env = process.env.WEBPACK_BUILD || process.env.NODE_ENV || 'development'

const outputFilename = 'video-react'
const minimizer = env === 'production' ? [new UglifyJsPlugin()] : []
const outputFile =
  env === 'production'
    ? `${outputFilename.toLowerCase()}.min.js`
    : `${outputFilename.toLowerCase()}.js`

const paths = [
  '/',
  '/components/',
  '/components/player/',
  '/components/shortcut/',
  '/components/big-play-button/',
  '/components/poster-image/',
  '/components/loading-spinner/',
  '/components/control-bar/',
  '/components/play-toggle/',
  '/components/forward-control/',
  '/components/replay-control/',
  '/components/volume-menu-button/',
  '/components/playback-rate-menu-button/',
  '/components/captioned-video',
  '/customize/',
  '/customize/enable-disable-components/',
  '/customize/customize-source/',
  '/customize/customize-component/',
  '/404.html',
]

const config = {
  mode: env,
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'), // Correct static config
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9005,
    client: {
      logging: 'info', // Control client-side logs
      overlay: true, // Enables an overlay for runtime errors
    },
  },
  entry: ['@babel/polyfill', './docs/lib/app.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./build'),
    libraryTarget: 'umd',
    library: 'VideoReact',
  },
  // Removed the `node` option that is causing the error
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './docs/static', to: 'assets' },
        { from: './dist', to: 'assets' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      'self': '{}',
    }),
    new StaticSiteGeneratorPlugin({
      paths,
      globals: {
        window: {},
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: 'assets/[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(json)$/,
        use: ['json-loader?cacheDirectory'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.jsx$/,
        use: 'raw-loader',
        include: path.resolve(__dirname, 'src/examples'), // Path to where your examples are located
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'assets',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: 'assets',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000,
              mimetype: '[name]-[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'bootstrap-scss': path.join(
        __dirname,
        'node_modules/bootstrap/scss/bootstrap.scss',
      ),
      'video-react-scss': path.resolve('./styles/scss/video-react.scss'),
      'video-react': path.resolve('./src'),
    },
    modules: [path.resolve('./src'), 'node_modules'],
  },
  optimization: {
    noEmitOnErrors: true,
    minimizer,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
}

export default config
