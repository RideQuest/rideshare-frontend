'use strict';

const angular = require('angular');
require('angular-route');
const app = angular.module('rideShareApp', ['ngRoute']);

require(__dirname + '/controller/user-controller.js')(app);
require(__dirname + '/controller/profile-controller.js')(app);
require(__dirname + '/controller/gmap-controller.js')(app);

require(__dirname + '/services/auth-service.js')(app);
require(__dirname + '/services/file-service.js')(app);

require(__dirname + '/directives/gmap-directive.js')(app);
require(__dirname + '/directives/app-directives.js')(app);

require(__dirname + '/routes.js')(app);
