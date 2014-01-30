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


directives.directive('footer', function(visitorService)
{
  return {
    restrict: 'EA',
    templateUrl: "partials/footer.html",
    link: function(scope, element, attributes)
    {
      scope.visitor = visitorService.visitor;
    }
  };
});

directives.directive('visitor', function()
{
  return {
    restrict: 'EA',
    scope: {user: "="},
    template: "<span>Visitor: {{user.name}}</span>",
  };
});
