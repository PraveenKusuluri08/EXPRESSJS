const People = require("../USERS/People")
const UTILS = require("./utils")
class Model {
  constructor() {}

  async _getData() {
    return People
  }
}
module.exports =Model
