'use strict';

angular.module('user.update', ['ngRoute', 'user.factory'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user/update/:id', {
            templateUrl: 'pages/user/user-update/user-update.html',
            controller: 'UserUpdateController as ctrl'
        });
    }])

    .controller('UserUpdateController', ['$routeParams', 'userFactory', '$location', function ($routeParams,userFactory, $location) {
        var ctrl = this;
        ctrl.id = +$routeParams.id;
        ctrl.user = userFactory.getUserById(ctrl.id);
        ctrl.user.dob = new Date(ctrl.user.dob);  
        ctrl.submit = function () {
            userFactory.deleteUser(ctrl.id);
            userFactory.saveUser(ctrl.user);
            $location.url('/user/list');
        }
    }]);