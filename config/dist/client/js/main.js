require.config({
  paths: {
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    marionette: 'vendor/backbone.marionette/backbone.marionette',
    jquery: 'vendor/jquery/jquery-2.1.1',
    handlebars: 'vendor/handlebars/handlebars-v2.0.0',
    template: 'utils/hd-template-mapper/hd-template-mapper',
    templates: 'templates',
    text: 'vendor/text/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      exports: 'Backbone',
      deps: ['jquery', 'underscore']
    },
    marionette: {
      exports: 'Backbone.Marionette',
      deps: ['backbone']
    },
    handlebars: {
      exports: 'Handlebars',
    },
    text: {
      exports: 'text',
    }
  },
  deps: ['jquery', 'underscore']
});

require([
  'application',
  'backbone',
  'router/router',
  'controllers/application_controller'
], function (Application, Backbone, Router, Controller) {
  'use strict';
  app.start();

  var controller = new Controller();
  window.router = new Router({ controller: controller });
  Backbone.history.start();

});