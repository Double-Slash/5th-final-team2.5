const withTM = require('next-transpile-modules')(['@dodam/components'], true);

// const webpack = withTypescript(
//   withTM({
//     transpileModules: ['dodam-components'],
//   })
// );

module.exports = withTM();
