'use strict';

/* Controllers */

var app = angular.module('plotting.controllers', []);

app.controller('NavController', function($scope, visitorService){
    $scope.visitor = visitorService.visitor;
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

app.controller('NavController', function($scope, $timeout, visitorService, resourceFetcherService){
  $scope.resourceCache = resourceFetcherService.cache;
  $scope.cacheArray = [];

  $scope.$watch('resourceCache.length', function()
  {
    $timeout(function()
    {
      console.log("cache changed");

      var c = $scope.resourceCache;

      for (i in c)
      {
        if (c.hasOwnProperty(i))
        {
          $scope.cacheArray.push(c[i]);
        }
      }
    }, 0);
  });
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
