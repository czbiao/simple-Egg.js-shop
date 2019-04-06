'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async list() {
    return [ 0, 1 ];
  }
}

module.exports = HomeService;
