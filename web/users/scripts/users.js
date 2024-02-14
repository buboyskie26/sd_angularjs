
var app = angular.module('usersApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
    //
    $routeProvider
        .when("/list", {
            templateUrl: "templates/list.html",
            controller: "listController"
        })
        .when("/forum", {
            templateUrl: "templates/forum.html",
            controller: "forumController"
        }).when("/create", {
            templateUrl: "templates/create.html",
            controller: "createController"
        })
        .when("/update", {
            templateUrl: "templates/update.html",
            controller: "updateController"
        })
       
        .otherwise({ redirectTo: '/list' });

    // Enable HTML5 Mode
    $locationProvider.html5Mode(true);
});


app.controller('usersController', function ($scope, $rootScope, services) {

    services.profile().then(function (result) {
        $scope.profile = result;

      /*  console.log($scope.profile);*/
    })

});

app.service('services', function ($http, $window) {

    var services = {};
    var token = localStorage.getItem("token");
    var linkUrl = localStorage.getItem('link');

    services.forumList = function () {

        return $http({
            method: 'GET',
            url: 'http://localhost:44337/api/forum',
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });
    }

    services.profile = function () {
        
        return $http({
            method: 'GET',
            url: linkUrl + 'api/my/basura/users/profile',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });

    }

    services.getUsertypes = function () {

        return $http({
            method: 'GET',
            url: linkUrl + 'api/my/basura/user/types?status=active',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });

    }

    services.getUsers = function () {
        return $http({
            method: 'GET',
            url: linkUrl + 'api/my/basura/users',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });
    }


    services.getUser = function (id) {
        return $http({
            method: 'GET',
            url: linkUrl + 'api/my/basura/users/' + id,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });
    }

    services.getStudent = function (data) {
        return $http({
            method: 'GET',
            url: linkUrl + 'api/my/basura/users',
            data: data,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });
    }

    services.createUser = function (data) {

        return $http({
            method: 'POST',
            url: linkUrl + 'api/my/basura/users/',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: data

        }).then(function (response) {
            return response;
        }).catch(function (err) {
            return err;
        });
    }

    services.updateUser = function (id, data) {
        return $http({
            method: 'PUT',
            url: linkUrl + 'api/my/basura/users/' + id,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            return err;
        });
    }

    services.deleteUser = function (id, status) {
        return $http({
            method: 'DELETE',
            url: linkUrl + 'api/my/basura/users/' + id + '?status=' + status,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            return err;
        });
    }

         
    return services;
});


