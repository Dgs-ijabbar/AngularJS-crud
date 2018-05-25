'use strict';

angular.module('user.list', ['ngRoute','ngTable','user.factory'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/list', {
    templateUrl: 'pages/user/user-list/user-list.html',
    controller: 'UserListController as ctrl'
  });
}])

.controller('UserListController', ['NgTableParams','userFactory','$location',function(NgTableParams,userFactory,location) {
  var ctrl = this;
  
  ctrl.confiugureTable = function(){
    ctrl.data = userFactory.getUsers();
    var initialSettings = {
      // page size buttons (right set of buttons in demo)
      counts: [],
      // determines the pager buttons (left set of buttons in demo)
      paginationMaxBlocks: 13,
      paginationMinBlocks: 2,
      dataset: ctrl.data
    };
    ctrl.tableParams = new NgTableParams({}, initialSettings);  
  }
  
  ctrl.delete = function(user){
    console.log(user.id);
    userFactory.deleteUser(user.id);
    ctrl.confiugureTable();
  }
  
  ctrl.update = function(user){
   location.url('/user/update/' + user.id);
  }

  ctrl.confiugureTable();
}]);