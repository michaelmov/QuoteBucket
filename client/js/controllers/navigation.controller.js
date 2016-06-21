'use strict';

app.controller('navigationCtrl', ['$scope', '$location','authService', 'quoteService', function($scope, $location, authService, quoteService) {

    $scope.isLoggedIn = authService.isLoggedIn();
    $scope.currentUser = authService.currentUser();

    $scope.newQuote = {
        quote: '',
        author: '',
        source: ''
    };

    $scope.newQuotePopover = {
        isOpen: false,
        templateUrl: 'views/templates/newQuotePopover.template.html'
    };

    $scope.userAccountPopover =  {
        isOpen: false,
        templateUrl: 'views/templates/userAccountPopover.template.html'
    };


    $scope.$on('login-done', function() {
        $scope.isLoggedIn = authService.isLoggedIn();
        $scope.currentUser = authService.currentUser();
    });

    $scope.addQuote = function() {
        quoteService.addQuote($scope.newQuote)
            .then(function() {
                $scope.newQuote = {
                    quote: '',
                    author: '',
                    source: ''
                };

                $scope.newQuotePopover.isOpen = false;

            });
    };

    $scope.logout = function() {
        authService.logout();
        $scope.isLoggedIn = authService.isLoggedIn();
        $scope.currentUser = authService.currentUser();
        $location.path('/login');
    }
}]);
