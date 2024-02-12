var app = angular.module('usersApp');



app.controller('updateController', function ($scope, $rootScope, services, $location) {


    var userId = $rootScope.userId;


    var userGetObject = null;

    services.getUsertypes().then(function (result) {
        $scope.usertypes = result;
        console.log(result);
    });

    services.getUser(userId).then(function (result) {
        $scope.userObject = result;
        userGetObject = result;

       /* console.log(userGetObject);*/

        $scope.edit = function (userGetObject) {

            /* Object came from the Backend API */

            var data = {
                "username": userGetObject.Username,
                "firstname": userGetObject.Firstname,
                "email": userGetObject.Email,
                "lastname": userGetObject.Lastname,
                "contactnumber": userGetObject.ContactNumber,
                "usertypeid": userGetObject.UsertypeId,
            };

            console.log(data);

            // API Backend Create Route
            services.updateUser(userId, data).then(function (result) {

                console.log(result);

                if (result.status == 400) {
                    swal(result.data.Message, "", "error");
                }

                if (result.status == 500) {
                    swal("Internal Server Error", "", "error");
                }

                if (result.status == 200) {
                    swal({
                        title: "Edit Success",
                        icon: "success",
                        closeOnClickOutside: false
                    }).then(function () {
                        $location.path("/list");
                    })
                    swal("Success", "", "error");
                    $location.path("/list");
                }
                //
            });
        }
    });

}); 