/*global define */
define([
  'backbone',
], function (Backbone) {
  'use strict';

  var loginModel = Backbone.Model.extend({
    defaults: {
      username: '',
      password: '',
    },
  });


  return loginModel;
});
