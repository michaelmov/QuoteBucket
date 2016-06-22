'use strict';

app.controller('mainController',['$scope', '$http', '$sce', 'quoteService', function($scope, $http, $sce, quoteService) {


    $scope.quotes = {};
    $scope.actionButtonsHidden = true;

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

    getQuotes();
    
    $scope.$on('quote-added', getQuotes);


}]);
