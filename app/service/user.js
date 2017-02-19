'use strict';

module.exports = app => {
  return class UserService extends app.Service {
    * find(params) {
      const user = yield app.mysql.get('user', {
          userId: params.userId,
      });
      
      return user;
    }
  }
};