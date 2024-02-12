


var app = angular.module('studentsApp');

app.controller('listController', function ($scope, $filter, $location, $rootScope) {

    // Array for List Index
    $scope.students = [
        {
            name: "Justine", age: 23, address: "49 Pechay St"
        },
        {
            name: "Adrian", age: 24, address: "45 Pechay St"
        },
        {
            name: "Sirios", age: 25, address: "60 Pechay St"
        }
    ];

    if ($rootScope.studentNew !== undefined) {

        $scope.students.push($rootScope.studentNew);

    }
    if ($scope.studentUpdate == 1) {

        $scope.students[$rootScope.studentIndex] = $rootScope.student;
        $rootScope.studentUpdate = 0;
    }

    $scope.create = function () {
        $location.path("create");
    }

    // Came from the loop of $scope.students
    $scope.edit = function (student, studentIndex) {

        $rootScope.student = student;
        $rootScope.studentIndex = studentIndex;

        /*alert(studentIndex)*/

        $location.path("update");
    }

    $scope.delete = function (studentIndex) {

        $scope.students.splice(studentIndex, 1);
    }

});

