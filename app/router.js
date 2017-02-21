'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  app.get('/users', 'user.all');
  app.get('/users/:id', 'user.one');
  app.post('/users', 'user.add');
};