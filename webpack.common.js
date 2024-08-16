const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack");
require('dotenv').config();
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
    entry: './src/index.js',
    module:{
        rules:[
            {
              test: /\.css$/i,
              use: [
                    "style-loader",
                    "css-loader",
                  ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'public/resource',
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'public/resource',
              }
        ]
    },
    resolve:{
        extensions: [".js"],
    },
    output:{
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
          title:"landing page",
          buttonId: process.env.LOAD_BUTTON_ID,
          appPlaceholderId: process.env.APP_PLACEHOLDER_ID,
          remoteAppUrl: process.env.REMOTE_APP_URL,
          template: 'src/templates/index.html',
        }),
        new Dotenv({
          path: './.env',
          safe: true,
        }),
      ]
}