'use strict';

app.controller('registerController', ['$scope', '$location', 'authService', function($scope, $location, authService) {

    $scope.credentials = {
        name: '',
        email: '',
        password: ''
    };

    $scope.error = '';

    $scope.register = function() {
        authService.register($scope.credentials)
            .then(function() {
                $location.path('/app');
            })
            .catch(function (err) {
                $scope.error = err.data;
            });
    };
}]);