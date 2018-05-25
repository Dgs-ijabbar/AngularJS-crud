'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngTable',
  'ngRoute',
  'user.create',
  'user.list',
  'user.update',
  'shared.directivesModule',
  'user.factory'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('');
 //$locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/user/list'});
}]);
