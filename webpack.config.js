/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = (env) => {
  return require(`./config/webpack.${env.prod ? 'prod' : 'dev'}.js`);
};
