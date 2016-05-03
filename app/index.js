'use strict';
const angular = require('angular');
var app = angular.module("rideshareApp", []);



require(__dirname + '/services/file-service.js')(app);
require(__dirname + '/directives/gmap-directive.js')(app);
require(__dirname + '/directives/app-directives.js')(app);

require(__dirname + '/controller/gmap-controller.js')(app);
require(__dirname + '/controller/user-controller.js')(app);
require(__dirname + '/controller/profile-controller.js')(app);
