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

directives.directive('date', function() {
  return {
    restrict: 'E',
    template: function() {
      return new Date();
    }
  };
});

directives.directive('visitor', function($parse) {
  return {
    link: function linkFn(scope, linkElement, attributes) {
      console.log('linkFn(', scope, linkElement, attributes);

      scope.$watch('visitorInfo', function(visitorInfo) {
        linkElement.text('Hello' + visitorInfo);
      });
    },
    restirct: 'E',
    templateUrl: 'partials/visitor.html'
  };
});
