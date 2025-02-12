const webpack = require("webpack");

module.exports = {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        }
      ]
    },
    resolve: {
        fallback: {
          process: require.resolve("process/browser")
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: "process/browser"
        })
      ]
  };
  