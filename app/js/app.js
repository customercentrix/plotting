'use strict';

// Declare app level module which depends on filters, and services

var plotting = angular.module('plotting', [
  'ngRoute',
  'plotting.filters',
  'plotting.services',
  'plotting.directives',
  'plotting.controllers'
]);

plotting.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/name', {templateUrl: 'partials/name.html', controller: 'NameController'});
  $routeProvider.when('/time', {templateUrl: 'partials/time.html', controller: 'TimeController'});
  $routeProvider.when('/resources', {templateUrl: 'partials/resources.html', controller: 'ResourceController'});
  $routeProvider.otherwise({redirectTo: '/name'});
}]);
