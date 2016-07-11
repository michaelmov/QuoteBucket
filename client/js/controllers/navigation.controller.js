'use strict';

app.controller('navigationCtrl', ['$scope', '$location','authService', 'ngToast', '$uibModal', 'quoteService', function($scope, $location, authService, ngToast, $uibModal, quoteService) {

    $scope.isLoggedIn = authService.isLoggedIn();
    $scope.currentUser = authService.currentUser();


    $scope.newQuote = {
        text: '',
        author: '',
        source: ''
    };

    $scope.openAddModal = function() {
        $uibModal.open({
            templateUrl: 'views/templates/addQuoteModal.template.html',
            controller: 'addQuoteModalController'
        });
    };

    $scope.mobileNavigation = {
        isOpen: false
    };

    $scope.newQuotePopover = {
        isOpen: false,
        templateUrl: 'views/templates/newQuotePopover.template.html'
    };

    $scope.userAccountPopover =  {
        isOpen: false,
        templateUrl: 'views/templates/userAccountPopover.template.html'
    };


    $scope.getClass = function (path) {
        return ($location.path() === path) ? 'active' : '';
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
        authService.logout()
            $scope.isLoggedIn = authService.isLoggedIn();
            $scope.currentUser = authService.currentUser();
            $location.path('/login');
            ngToast.success({
                content: 'Signed out'
            });
    }
}]);
