const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
  const envPath = env.REACT_APP_ID ? `.env.${env.REACT_APP_ID}` : ".env";

  return {
    plugins: [
      new Dotenv({
        path: envPath,
      }),
    ],
  };

  return config;
};
