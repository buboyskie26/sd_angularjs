
var app = angular.module('studentsApp');


app.controller('updateController', function ($scope, $filter, $rootScope, $location) {


    console.log($rootScope.student);
    console.log($rootScope.studentIndex);

    $scope.update = function (student) {
        $rootScope.studentUpdate = 1;
        $location.path("list");
    }

  /*  $scope.student = $rootScope.student;*/
});

