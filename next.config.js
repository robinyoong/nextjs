const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const { default: next } = require('next');

dotenvLoad();

const withNextEnv = nextEnv();
module.exports = nextEnv();
