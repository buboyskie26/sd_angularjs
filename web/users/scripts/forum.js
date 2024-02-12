
var app = angular.module('usersApp');


app.controller('forumController', function ($scope, $rootScope, services, $location) {

    services.forumList().then(function (result) {
        console.log(result);
    });

});