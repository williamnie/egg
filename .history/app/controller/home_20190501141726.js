'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async hello() {
    const { ctx, service } = this;
    const { name } = ctx.params;
    const res = await service.home.hello(name);
    ctx.helper.success({ ctx, res });
  }

  async postTest() {
    const { ctx, service } = this;
    const { name, age } = ctx.request.body;
    const res = await service.home.postTest(name, age);
    ctx.helper.success({ ctx, res });
  }

}

module.exports = HomeController;
