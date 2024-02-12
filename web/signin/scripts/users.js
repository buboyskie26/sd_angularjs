

var app = angular.module('userApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    //
    $routeProvider
        .when("/", {
            templateUrl: "signin/templates/signin.html",
            controller: "signinController"
        })
        .otherwise({ redirectTo: '/' });

    // Enable HTML5 Mode
    $locationProvider.html5Mode(true);

});

app.service('services', function ($http, $window) {

    services = {};

    /* https://localhost:44307/ */

    localStorage.setItem('link', 'https://mybasura-api.2sds.com/');

    var linkUrl = localStorage.getItem('link');

    services.signin = function (data) {

        var result = $http({

            method: 'POST',
            url: linkUrl + 'api/my/basura/auth/users/signin',
            data: data

        }).then(function (response) {

            return response;

        }, function (err) {

            return err;
        });

        return result;
    }

    return services;
});

app.controller('userController', function ($scope, $rootScope) {


});




