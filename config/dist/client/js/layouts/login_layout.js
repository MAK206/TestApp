/*global define */
define([
  'marionette',
  'jquery',
  'underscore',
  'template!templates/login/loginLayoutTemplate'
], function (Marionette, $, _, LoginLayoutTemplate) {
  'use strict';

  var loginLayout = Backbone.Marionette.LayoutView.extend({
    template: LoginLayoutTemplate,

    regions: {
      loginView: "#loginView",
    },
  });

  return loginLayout;

});