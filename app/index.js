'use strict';
const angular = require('angular');
require('angular-material');
require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-mocks');
require('angular-sanitize');
require('angular-route');
var app = angular.module("rideshareApp", []);

// require(__dirname + '/js/main.js')(app);
require(__dirname + '/services/file-service.js')(app);
// require(__dirname + '/directives/gmap-directive.js')(app);
require(__dirname + '/directives/app-directives.js')(app);
// require(__dirname + '/services/profile-services.js')(app);

// require(__dirname + '/controller/gmap-controller.js')(app);
require(__dirname + '/controller/user-controller.js')(app);
require(__dirname + '/controller/profile-controller.js')(app);
// require(__dirname + '/controller/dashboard-controller.js')(app);
// require(__dirname + '/controller/home-controller.js')(app);
