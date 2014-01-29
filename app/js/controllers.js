'use strict';

/* Controllers */

var app = angular.module('plotting.controllers', []);

app.controller('NavController', function($scope){
    $scope.tabs = [
      {
        'name' : 'By Name',
        'path' : '#/name'
      },
      {
        'name' : 'By Time',
        'path' : '#/time'
      },
      {
        'name' : 'About',
        'path' : '#/about'
      }
    ];
});

app.controller('NameController', function() {
    
});

app.controller('TimeController', function() {

});

app.controller('AboutController', function() {

});

app.controller('AuthorInfoController', function($scope){
  $scope.author = {};
  $scope.author.name = "Joel Edwards";
  $scope.author.email = "joel@customercentrix.com";
});
