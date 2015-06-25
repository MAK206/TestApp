/*global define */
define([
  'marionette',
  'controllers/application_controller'
], function (Marionette, Controller) {
  'use strict';

  return Marionette.AppRouter.extend({

    appRoutes: {
      '': 'login'
    }
  });
});
