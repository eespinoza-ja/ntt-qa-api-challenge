/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './api/*_test.js',
  output: './output',
  helpers: {
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    },
    REST: {
      endpoint: 'https://petstore.swagger.io/v2'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'ntt-qa-api-challenge'
}