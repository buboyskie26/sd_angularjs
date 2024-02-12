

var app = angular.module('studentsApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    //
    $routeProvider
        .when("/list", {
            templateUrl: "templates/list.html",
            controller: "listController"
        })
        .when("/create", {
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


app.controller('studentsController', function ($scope, $window) {

    // Basic directive
    $scope.test = ".NET Framework";

    $scope.arrays = [
        {
            name: ".NET Framework", age: 25, address: "United States"
        },
        {
           name: "Javascript", age: 20, address: "Australia"
        }
    ];

})


