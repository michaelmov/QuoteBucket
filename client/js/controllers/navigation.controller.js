'use strict';

app.controller('navigationCtrl', ['$scope', '$location','authService', function($scope, $location, authService) {

    $scope.isLoggedIn = authService.isLoggedIn();
    $scope.currentUser = authService.currentUser();

    $scope.$on('login-done', function() {
        $scope.isLoggedIn = authService.isLoggedIn();
        $scope.currentUser = authService.currentUser();
    });

    $scope.logout = function() {
        authService.logout();
        $scope.isLoggedIn = authService.isLoggedIn();
        $scope.currentUser = authService.currentUser();
        $location.path('/login');
    }
}]);
