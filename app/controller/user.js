'use strict';

exports.info = function* () {

  this.body = yield this.service.user.find({
    userId: this.params.id
  });
};