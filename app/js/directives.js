'use strict';

/* Directives */

var directives = angular.module('plotting.directives', []);

directives.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

directives.directive('author', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/author.html'
  };
});

directives.directive('ccxCopyright', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/ccx-copyright.html'
  };
});

directives.directive('date', function()
{
  return {
    restrict: 'E',
    template: function() {
      return new Date();
    }
  };
});

directives.directive('visitor', function()
{
  return {
    restrict: 'E',
    template: function($scope)
    {
      var name = new String($scope.visitor.name).replace(/ /g, '');

      return (name.length > 0) ? ("<span>Vistitor: " + name + "</span>") : "";
    }
  };
});
