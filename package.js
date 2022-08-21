'use strict';

Package.describe({
  summary: 'Fork of useraccounts:core for Firestorm',
  version: '1.0.7',
  name: 'meteorhubdotnet:firestorm-useraccounts-core',
  git: 'https://github.com/meteorhubdotnet/firestorm-useraccounts-core',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.7.3');

  api.use([
    'accounts-base',
    'check',
    'underscore',
    'reactive-var',
  ], ['client', 'server']);

  api.use([
    'blaze@2.6.1',
    'reactive-dict',
    'templating@1.4.2',
    'jquery@3.0.0'
  ], 'client');

  api.use([
    'http@2.0.0'
  ], 'server');

  api.imply([
    'accounts-base',
    'softwarerero:accounts-t9n@2.6.0',
  ], ['client', 'server']);

  api.imply([
    'templating',
  ], ['client']);

  api.addFiles([
    'lib/field.js',
    'lib/core.js',
    'lib/server.js',
    'lib/methods.js',
    'lib/server_methods.js',
  ], ['server']);

  api.addFiles([
    'lib/utils.js',
    'lib/field.js',
    'lib/core.js',
    'lib/client.js',
    'lib/templates_helpers/at_error.js',
    'lib/templates_helpers/at_form.js',
    'lib/templates_helpers/at_input.js',
    'lib/templates_helpers/at_nav_button.js',
    'lib/templates_helpers/at_oauth.js',
    'lib/templates_helpers/at_pwd_form.js',
    'lib/templates_helpers/at_pwd_form_btn.js',
    'lib/templates_helpers/at_pwd_link.js',
    'lib/templates_helpers/at_reCaptcha.js',
    'lib/templates_helpers/at_resend_verification_email_link.js',
    'lib/templates_helpers/at_result.js',
    'lib/templates_helpers/at_sep.js',
    'lib/templates_helpers/at_signin_link.js',
    'lib/templates_helpers/at_signup_link.js',
    'lib/templates_helpers/at_social.js',
    'lib/templates_helpers/at_terms_link.js',
    'lib/templates_helpers/at_title.js',
    'lib/templates_helpers/at_message.js',
    'lib/templates_helpers/ensure_signed_in.html',
    'lib/templates_helpers/ensure_signed_in.js',
    'lib/methods.js',
  ], ['client']);

  api.export([
    'AccountsTemplates',
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('meteorhubdotnet:firestorm-useraccounts-core');

  api.use([
    'accounts-password',
    'tinytest',
    'test-helpers',
    'underscore',
  ], ['client', 'server']);

  api.addFiles([
    'tests/tests.js',
  ], ['client', 'server']);
});
