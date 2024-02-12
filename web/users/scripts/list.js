
var app = angular.module('usersApp');


app.controller('listController', function ($scope, $rootScope, services, $location) {

    console.log($rootScope.signInValue);

    $scope.page = 1;
    $scope.selectvalue = '15';

    services.getUsers().then(function (result) {
        $scope.users = result;
        console.log(result);
    });


    $scope.create = function () {
        $location.path("create")
    }


    $scope.edit = function (id) {
        $rootScope.userId = id;
        $location.path("update")
    }

    $scope.delete = function (userId) {
        console.log(userId);
        var status = 200;
        services.deleteUser(userId, status).then(function (result) {

            console.log(result);

        });
    }
});
 


