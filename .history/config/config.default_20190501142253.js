/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1556688488041_8873';
  config.middleware = [];
  const userConfig = {
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['http://localhost:8000', 'http://localhost:8001'],
  };

  return {
    ...config,
    ...userConfig,
  };
};
