
var app = angular.module('studentsApp');



app.controller('createController', function ($scope, $filter, $rootScope, $location) {

    $scope.studentsArray = [];

    $scope.create = function () {

        $rootScope.studentNew = $scope.studentsArray;
        $location.path("list")
    }

});

