


var app = angular.module('studentsApp');

app.controller('studentlistController', function ($scope, $filter, $location, $rootScope, services) {

    $scope.page = 1;
    $scope.selectvalue = '15';

    services.getStudents().then(function (result) {
        $scope.students = result;
        console.log(result);
    });


    $scope.redirectTocreate = function () {

        $location.path("create");
    }

    $scope.updateStudentRedirect = function (studentId) {
        $rootScope.studentId = studentId
        $location.path("update");
    }
});

