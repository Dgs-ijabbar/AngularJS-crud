'use strict';

angular.module('user.create', ['ngRoute', 'user.factory'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/user/create', {
      templateUrl: 'pages/user/user-create/user-create.html',
      controller: 'UserCreateController as ctrl'
    });
  }])

  .controller('UserCreateController', ['userFactory','$location', function (userFactory,$location) {
    var ctrl = this;
    ctrl.user = {};
    ctrl.submit = function(){
      userFactory.saveUser(ctrl.user);
      ctrl.user = {};
      $location.url('/user/list');
    }
  }]);