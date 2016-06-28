'use strict';

app.controller('registerController', ['$scope', '$location', 'ngToast', 'authService', function($scope, $location, ngToast, authService) {

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
                ngToast.success({
                    content: 'Account created successfully'
                });
            })
            .catch(function (err) {
                $scope.error = err.data;
            });
    };
}]);