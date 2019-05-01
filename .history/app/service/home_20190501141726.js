'use strict';
const Service = require('egg').Service;
class HomeService extends Service {
    async hello(name) {
        return name.toUpperCase();
    }

    async postTest(name, age) {
        const data = `${name}++++${age}`;
        return data.toUpperCase();
    }

}

module.exports = HomeService;
