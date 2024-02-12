

var app = angular.module('userApp');

app.controller('signinController', function ($scope, $rootScope, services, $window, $location) {

    $scope.signIn = function () {

        var data = {
            "username": $scope.username,
            "password": $scope.password,
        };

        // Came from users.js, app.service('services' function

        services.signin(data).then(function (result) {

            console.log(result);

            if (result.status === 200) {
                localStorage.setItem('token', result.data.Token);

                swal({
                    title: "Success",
                    icon: "success",
                    closeOnClickOutside: false
                }).then(function () {

                    $rootScope.signInValue = 555;
                    $window.location.href = "../users/index.html";
                })
            } else {

            }
        });
    }
});