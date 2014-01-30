'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('plotting.services', []);

services.value('version', '0.1');
services.factory('versionFactory', function() {
  return '0.1';
});

services.service('visitorService', function()
{
  this.visitor = {};
});

services.factory('visitorFactory', function () {
  var Visitor = function (name) {
    this.visitor = {};
    if (name) {
      this.visitor.name = name;
    }
  };

  var VisitorFactory = function() {
    this.visitors = {};
  };
  
  VisitorFactory.prototype.get = function(name) {
    if (this.visitors[name]) return this.visitors[name];
    var v = this.visitors[name] = new Visitor(name);
    return v;
  };

  return new VisitorFactory();
});

services.service('resourceFetcherService', function($http, $q)
{
  var cache = this.cache = {};

  this.get = function(url)
  {
    if (cache[url])
    {
      var d = $q.defer();
      d.resolve(cache[url]);
      return d.promise();
    }

    var promise = $http.get(url);
    return promise.success(function(data, status, headers, config){
      cache[url] = data;
      return data;
    });
  };
});

services.factory('visitorServicer', function()
{
  var visitors = this.visitors = {};
  var Visitor = function(email, name)
  {
    this.name = name;
    this.email = email;
  };

  this.get = function(email)
  {
    return visitors[email];
  };

  this.set = function(email, name)
  {
    var visitor = visitors[email] || new Visitor(email, name);
    visitor.name = name;
  };
});

// app.value(...) -- an Object
// ^
// app.service(...) -- registers a services which ...
// ^
// app.factory(...) -- registers a factory which generates new services or Objects
// ^
// app.provider(...) -- registers a provider which generates factories
