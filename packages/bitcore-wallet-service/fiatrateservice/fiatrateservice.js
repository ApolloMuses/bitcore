#!/usr/bin/env node

'use strict';

var config = require('../config');
var FiatRateService = require('../lib/fiatrateservice');

var service = new FiatRateService();
service.init(config, function(err) {
  if (err) throw err;
  let opts = config;
  if (config.fiatRateServiceOpts) {
    opts = config.fiatRateServiceOpts;
  }
  service.startCron(opts, function(err) {
    if (err) throw err;

    console.log('Fiat rate service started');
  });
});
