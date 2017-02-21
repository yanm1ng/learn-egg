'use strict';

module.exports = app => {
  return class UserService extends app.Service {
    * all() {
      const users = yield app.mysql.select('user');

      return users;
    }
    * one(id) {
      const user = yield app.mysql.get('user', {
          userId: id,
      });

      return user;
    }
  }
};