/*global define */
define([
  'marionette',
  'jquery'
], function (Marionette, $) {
  'use strict';

  var applicationRegion = Backbone.Marionette.Region.extend({
    el: "#main-container"
  });

  return applicationRegion;

});