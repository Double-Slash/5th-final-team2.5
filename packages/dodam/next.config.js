const withTM = require('next-transpile-modules')(['@dodam/components'], true);
const withImages = require('next-images');

module.exports = withTM();
module.exports = withImages();
