'use strict';

angular.module('user.factory', [])
    .factory('userFactory', ['$window', function (window) {
        var get = function () {
            var list = JSON.parse(window.localStorage.getItem('users')) || [];
            return list.sort(function (firstUser, secUser) {
                return firstUser.id - secUser.id;
            });
        }

        var getbyId = function (id) {
            var list = JSON.parse(window.localStorage.getItem('users')) || [];
            return list.find(function (item) {
                return item.id == id;
            });
        }

        var save = function (user) {
            var list = JSON.parse(window.localStorage.getItem('users')) || [];
            if(!user.id){
                if (list.length > 0) {
                    list.sort(function (firstUser, secUser) {
                        return firstUser.id - secUser.id;
                    });
                    user['id'] = (list[list.length - 1].id) + 1
                } else {
                    user.id = 1;
                }
            }
            list.push(user);
            window.localStorage.setItem('users', JSON.stringify(list));
        }
        var remove = function (id) {
            var list = JSON.parse(window.localStorage.getItem('users')) || [];
            window.localStorage.setItem('users', JSON.stringify(list.filter(function (item) {
                return item.id != id;
            })));
        }
        return {
            getUsers: get,
            saveUser: save,
            getUserById: getbyId,
            deleteUser: remove,
        }

    }]);