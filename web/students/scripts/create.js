
var app = angular.module('studentsApp');



app.controller('studentCreateController', function ($scope, $filter, $rootScope, $location, services) {

    $scope.create = function () {

        var data = {
            "FirstName": $scope.student.FirstName,
            "LastName": $scope.student.LastName,
            "MiddleName": $scope.student.MiddleName,
            "Gender": $scope.student.Gender,
            "Age": $scope.student.Age,
            "Address": $scope.student.Address,
            "Course": $scope.student.Course,
        }


        console.log(data);

        services.createStudent(data).then(function (result) {

            if (result.status == 200) {
                console.log('Successfully created a student');
                swal({
                    title: "Success",
                    icon: "success",
                    closeOnClickOutside: false
                }).then(function () {
                   /*$window.location.href = "list";*/
                    $scope.$apply(function () {
                        $location.path('/list');
                    });
                })
            }
        });
    }

});

