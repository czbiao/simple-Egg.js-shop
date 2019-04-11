'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
  constructor(ctx) {
    super(ctx);
    this.model = null;
  }

  async list(limit = 15, offset = 0, where = {}) {
    const { ctx } = this;
    const query = { limit, offset, where };
    return await this.model.findAll(query);
  }
}

module.exports = BaseService;
