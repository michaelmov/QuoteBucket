'use strict';

app.controller('mainController',['$scope', '$http', '$rootScope', '$location', '$uibModal', 'quoteService',
    function($scope, $http, $rootScope, $location, $uibModal, quoteService) {

    $scope.pageHeading = 'All Quotes';
    $scope.quotes = [];
    $scope.actionButtonsHidden = true;
    $rootScope.location = $location.path();

    $scope.deleteConfirmationPopover = {
        templateUrl: 'views/templates/deleteConfirmationPopover.template.html'
    };

    function getQuotes() {
        return quoteService.getQuotes()
            .then(function(quotes) {
                $scope.quotes = quotes;
            });
    }

    $scope.openDeleteConfirmationPopover = function(i) {
        $scope.quotes[i].isOpen = true;
    };

    $scope.closeDeleteConfirmationPopover = function(i) {
        $scope.quotes[i].isOpen = false;
    };
    
    $scope.deleteQuote = function(quoteId) {
        return quoteService.deleteQuote(quoteId)
            .then(function() {
                getQuotes();
            });
    };

    $scope.openEditModal = function(quote) {
        $uibModal.open({
            templateUrl: 'views/templates/editQuoteModal.template.html',
            controller: 'editQuoteModalController',
            resolve: {
                quote: quote
            }

        });
    };



    $scope.updateQuote = function(quote) {
      return quoteService.updateQuote(quote)
          .then(function() {
              getQuotes();
          });
    };

    getQuotes();
    
    $scope.$on('quote-added', getQuotes);


}]);
