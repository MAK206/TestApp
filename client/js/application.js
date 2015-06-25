/*global define */

define([
  'marionette',
], function (Marionette) {
  'use strict';

  var app = new Marionette.Application();

  app.addRegions({
    header: '#header',
    main: '#main',
    footer: '#footer'
  });

  // app.addInitializer();

  return window.app = app;
});
