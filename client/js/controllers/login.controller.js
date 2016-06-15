'use strict';

app.controller('loginController', ['$scope', '$location', 'authService', function($scope, $location, authService) {
    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.error = '';
    
    $scope.authenticate = function () {
        authService.login($scope.credentials)
            .error(function (err) {
                $scope.error = err;
            })
            .then(function() {
                $location.path('/')
            })
    }
}]);