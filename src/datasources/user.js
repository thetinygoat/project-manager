const {DataSource} = require('apollo-datasource')
;
const uuid = require('uuid/v4');

class UserAPI extends DataSource {
  constructor({store}) {
    super();
    this.store = store;
  }
  initialize(config) {
    this.context = config.context;
  }
  async findOrCreateUser({email: emailArg} = {}) {
    const email = this.context && this.context.user ? this.context.user.email: emailArg;
  }
}

module.exports = UserAPI;
