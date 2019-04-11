'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.service = null;
  }

  async list() {
    const { ctx } = this;
    ctx.body = await this.service.list(ctx.helper.toInt(ctx.query.limit), ctx.helper.toInt(ctx.query.offset));
  }
}

module.exports = BaseController;
