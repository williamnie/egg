'use strict';
const Service = require('egg').Service;
class HomeService extends Service {
    async hello() {
        return 'hello xiaobei';
    }
}

module.exports = HomeService;
