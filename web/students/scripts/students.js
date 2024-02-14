

var app = angular.module('studentsApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
    //
    $routeProvider
        .when("/list", {
            templateUrl: "templates/list.html",
            controller: "studentlistController"
        })
        .when("/create", {
            templateUrl: "templates/create.html",
            controller: "studentCreateController"
        })
        .when("/update", {
            templateUrl: "templates/update.html",
            controller: "studentUpdateController"
        })
        .otherwise({ redirectTo: '/list' });

    // Enable HTML5 Mode
    $locationProvider.html5Mode(true);
});





app.service('services', function ($http, $window) {

    var services = {};
    var token = localStorage.getItem("token");
    var linkUrl = localStorage.getItem('link');

    var studentUrl = 'http://localhost:44397/';

    services.getStudents = function () {

        return $http({
            method: 'GET',
            url: studentUrl + 'api/students',
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });
    }
    services.getSingleStudent = function (id) {

        return $http({
            method: 'GET',
            url: studentUrl + 'api/students/' + id,
        }).then(function (response) {
            return response.data;
        }).catch(function (err) {
            return err;
        });
    }

    services.createStudent = function (data) {

        return $http({
            method: 'POST',
            url: studentUrl + 'api/students',
            data: data
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            return err;
        });
    }
    services.updateStudent = function (id, data) {

        return $http({
            method: 'PUT',
            url: studentUrl + 'api/students/' + id,
            data:data
        }).then(function (response) {
            return response;
        }).catch(function (err) {
            return err;
        });
    }
    

    return services;
});

app.controller('studentsController', function ($scope, $window) {


})