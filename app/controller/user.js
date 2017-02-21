'use strict';

exports.all = function* () {
  this.body = yield this.service.user.all();
}

exports.one = function* () {
  const {
    id
  } = this.params;

  this.body = yield this.service.user.one(id);
};

exports.add = function* () {
  this.body = '';
}