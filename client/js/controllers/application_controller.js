/*global define */
define([
  'underscore',
  'regions/application_region',
  'controllers/login_controller',
  'layouts/application_layout'
], function (_, ApplicationRegion, LoginController, ApplicationLayout) {
  'use strict';

  var applicationController = Marionette.Controller.extend({

    initialize: function(options){
      this._initializeLayout();
    },

    _initializeLayout: function() {
      this.applicationRegion = new ApplicationRegion();
      this.layout = new ApplicationLayout();
      this.applicationRegion.show(this.layout);
    },

    login: function() {
      this._initializeLoginView();
    },

    _initializeLoginView: function() {
      this.loginController = new LoginController({mainRegion: this.layout.content});
    },
  });

  return applicationController;

});
