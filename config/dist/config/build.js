({
    appDir: '../',
    baseUrl: './client/js',
    dir: './dist',
    modules: [
        {
            name: 'main'
        }
    ],
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
      }
})