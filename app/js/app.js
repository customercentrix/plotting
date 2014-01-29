'use strict';


// Declare app level module which depends on filters, and services
angular.module('plotting', [
  'ngRoute',
  'plotting.filters',
  'plotting.services',
  'plotting.directives',
  'plotting.controllers'
])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/name',
    {templateUrl: 'partials/name.html', controller: 'NameController'});
  $routeProvider.when('/time',
    {templateUrl: 'partials/time.html', controller: 'TimeController'});
  $routeProvider.otherwise({redirectTo: '/name'});
}]);
