'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'portfolio',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-leaflet-maps'] = {
    url: process.env.LEAFLET_MAPS_URL || 'https://unpkg.com',
    version: process.env.LEAFLET_MAPS_VERSION || '1.3.4',
    apiKey: process.env.LEAFLET_MAPS_API_KEY || 'pk.eyJ1IjoiYml0bG9naWMiLCJhIjoiY2szZmZlZndqMDI2ODNsbzR0cW85cGhlMiJ9.kXqr7VSiwm26EvjEFC2roQ'
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.rootURL = '/portfolio';
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  return ENV;
};
