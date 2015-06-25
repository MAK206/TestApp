/*global define */
define([
  'layouts/login_layout',
  'views/login/login_view',
  'jquery',
  'underscore',
  'backbone'
], function (LoginLayout, LoginView, $, _, Backbone) {
  'use strict';

  var loginController = Marionette.Controller.extend({

    initialize: function(options){
      this.mainRegion = options.mainRegion;
      this._initializeLayout();
      this._intializeLoginView();
    },

    _initializeLayout: function() {
      this.layout = new LoginLayout();
      this.mainRegion.show(this.layout);
    },

    _intializeLoginView: function() {
      this.loginView = new LoginView();
      this.layout.loginView.show(this.loginView);
      this.loginView.on("On:Submit", this._onSubmit, this);
    },

    _onSubmit: function(loginModel) {
      alert('Submit Clicked');
    },
  });
  return loginController;
});
