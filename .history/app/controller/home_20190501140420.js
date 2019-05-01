'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  // 127.0.0.1:7001/hello/xiaobei
  async hello() {
    const { ctx, service } = this;
    const { name } = ctx.params;
    console.log('name', name);
    const res = await service.home.hello(name);
    ctx.body = res;
  }

}

module.exports = HomeController;
