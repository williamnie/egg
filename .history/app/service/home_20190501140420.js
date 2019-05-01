'use strict';
const Service = require('egg').Service;
class HomeService extends Service {
    async hello(name) {
        return name.toUpperCase();
    }
}

module.exports = HomeService;
