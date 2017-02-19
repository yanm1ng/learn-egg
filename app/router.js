'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/user/:id', 'user.info');
};