'use strict';

app.controller('loginController', ['$scope', '$location', 'authService', function($scope, $location, authService) {
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.error = '';
    
    $scope.authenticate = function () {
        authService.login($scope.credentials)
            .then(function() {
                $location.path('/')
            })
            .catch(function (err) {
                $scope.error = err.data.message.message;
            });
    }
}]);