/*global define */
define([
  'marionette',
  'jquery',
  'underscore',
  'template!templates/application/applicationLayoutTemplate',
], function (Marionette, $, _, ApplicationLayoutTemplate) {
  'use strict';

  var applicationLayout = Backbone.Marionette.LayoutView.extend({
    template: ApplicationLayoutTemplate,

    regions: {
      applicationLoader:   "#applicationLoader",
      content:             "#content",
    },

  });

  return applicationLayout;

});