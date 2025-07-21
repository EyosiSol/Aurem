import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import dotenv from 'dotenv';
import fs from 'fs';

// Polyfill __dirname for ES modules
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = () => {
  // Read .env file
  const envPath = path.resolve(__dirname, '.env');
  const fileEnv = fs.existsSync(envPath)
    ? dotenv.config({ path: envPath }).parsed
    : {};

  // Convert to Webpack-friendly format: { 'process.env.KEY': JSON.stringify(value) }
  const envKeys = Object.entries(fileEnv || {}).reduce((prev, [key, value]) => {
    prev[`process.env.${key}`] = JSON.stringify(value);
    return prev;
  }, {});

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devServer: {
      static: './dist',
      hot: true,
      port: 3000,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    mode: 'development',
  };
};

export default config;
