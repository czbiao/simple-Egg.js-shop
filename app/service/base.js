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

  /**
   * 创建数据
   * @param body
   * @return {Promise<*>}
   */
  async create(body) {
    let result;
    try {
      result = await this.model.create(body);
    } catch (e) {
      this.ctx.throw(400, `创建失败，error为${e}`);
    }
    return result;
  }
}

module.exports = BaseService;
