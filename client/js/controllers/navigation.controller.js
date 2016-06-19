'use strict';

app.controller('navigationCtrl', ['$scope', '$location','authService', 'quoteService', function($scope, $location, authService, quoteService) {

    $scope.isLoggedIn = authService.isLoggedIn();
    $scope.currentUser = authService.currentUser();

    $scope.newQuote = {
        quote: '',
        author: '',
        source: ''
    };

    $scope.popover = {
        isOpen: false
    };


    $scope.$on('login-done', function() {
        $scope.isLoggedIn = authService.isLoggedIn();
        $scope.currentUser = authService.currentUser();
    });

    $scope.addQuote = function() {
        quoteService.addQuote($scope.newQuote);
        $scope.newQuote = {
            quote: '',
            author: '',
            source: ''
        };

        $scope.popover.isOpen = false;
    };

    $scope.logout = function() {
        authService.logout();
        $scope.isLoggedIn = authService.isLoggedIn();
        $scope.currentUser = authService.currentUser();
        $location.path('/login');
    }
}]);
