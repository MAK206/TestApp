/*global define */
define([
  'marionette',
  'jquery',
  'underscore',
  'models/login_model',
  'template!templates/login/loginViewTemplate'
], function (Marionette, $, _, LoginModel, LoginViewTemplate) {
  'use strict';

  var loginView = Marionette.ItemView.extend({
    template: LoginViewTemplate,
    className: 'signInWrapper',

    ui:{
      username: '#txtUsername',
      password: '#txtPassword',
      rememberMe: '#rememberMe label',
      loginAlert: '#login-alert',
      emptyloginAlert: '#empty-login-alert',
      loginForm:  '#loginForm',
      btnSubmit: '#btnSubmit',
      preLoader: '.signInPreloader',
    },

    events:{
      'click #btnSubmit' : '_onSubmit',
      'keyup #txtPassword' : '_onKeyUpTxtPassword',
      'click .close-login-alert' : '_closeAlert',
    },

    onShow: function(){
      this._onLoadFocus();
    },

    _onSubmit: function(event) {
      this._validate();
    },

    _onKeyUpTxtPassword: function(event) {
      if(event.keyCode == 13){
          this._validate();
      }
    },

    _closeAlert: function(event){
      this.ui.loginAlert.hide();
      this.ui.emptyloginAlert.hide();
    },

    _validate: function() {
      this.ui.loginAlert.hide();
      this.ui.emptyloginAlert.hide();
      if(this.ui.username.val().trim() !='' && this.ui.password.val().trim() !=''){
        var loginModel = new LoginModel();
        loginModel.set({
          username: this.ui.username.val(),
          password: this.ui.password.val(),
          rememberMe: this.ui.rememberMe.is(':checked')
        });
        this.trigger("On:Submit", loginModel);
      }
      else {
        this.ui.emptyloginAlert.show();
      }
    },

    _onLoadFocus: function(){
      this.ui.username.focus();
    },

  });

  return loginView;
});
