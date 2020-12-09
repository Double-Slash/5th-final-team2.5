const withTM = require('next-transpile-modules');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(
  withTM({
    transpileModules: ['dodam-components'],
  })
);
