
var app = angular.module('studentsApp');


app.controller('studentUpdateController', function ($scope, $filter, $rootScope, $location, services) {


    /*console.log($rootScope.studentId);*/

    var studentId = $rootScope.studentId;

    services.getSingleStudent(studentId).then(function (result) {

        $scope.student = result;

        console.log(result);

        $scope.handlingUpdateStudent = function () {

            var data = {
                "FirstName": $scope.student.FirstName,
                "LastName": $scope.student.LastName,
                "MiddleName": $scope.student.MiddleName,
                "Gender": $scope.student.Gender,
                "Age": $scope.student.Age,
                "Address": $scope.student.Address,
                "Course": $scope.student.Course,
                "IsActive": $scope.student.IsActive
            };

            console.log(data);

           /* swal({
                title: "Edit Success",
                icon: "success",
                closeOnClickOutside: false
            }).then(function () {
                $location.path("/list");
            })*/

            services.updateStudent(studentId, data).then(function (result) {

                if (result.status == 400) {
                    swal(result.data.Message, "", "error");
                }
                if (result.status == 500) {
                    swal("Internal Server Error", "", "error");
                }

                if (result.status == 200) {
                    swal({
                        title: "Successfully Edited student",
                        icon: "success",
                        closeOnClickOutside: false
                    }).then(function () {
                        $scope.$apply(function () {
                            $location.path('list');
                        });
                    })
                    
                }
            });

        }

    });
});

