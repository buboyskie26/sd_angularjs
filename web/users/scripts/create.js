
var app = angular.module('usersApp');



app.controller('createController', function ($scope, $rootScope, services, $location) {

    // Came from the users services API CALL From the Backend API
    services.getUsertypes().then(function (result) {
        $scope.usertypes = result;
        console.log(result);
    });

    $scope.create = function () {

        /* Object came from the Backend API */

        var data = {
            "username": $scope.user.Username,
            "password": $scope.user.Password,
            "firstname": $scope.user.Firstname,
            "email": $scope.user.Email,
            "lastname": $scope.user.Lastname,
            "contactnumber": $scope.user.ContactNumber,
            "usertypeid": $scope.user.UsertypeId,
        };

        console.log(data);

        // API Backend Create Route
        services.createUser(data).then(function (result) {

            if (result.status == 400) {
                swal(result.data.Message, "", "error");
            }

            if (result.status == 500) {
                swal("Internal Server Error", "", "error");
            }

            if (result.status == 200) {
                swal({
                    title: "Creation Success",
                    icon: "success",
                    closeOnClickOutside: false
                }).then(function () {
                    $location.path("/list");
                })
                /*swal("Success", "", "error");
                $location.path("/list");*/
            }
            //

        });

    }

});