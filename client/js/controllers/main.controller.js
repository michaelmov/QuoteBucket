'use strict';

app.controller('mainController',['$scope', '$http', '$sce', 'quoteService', function($scope, $http, $sce, quoteService) {


    $scope.quotes = '';

    function getQuotes() {
        return quoteService.getQuotes()
            .then(function(quotes) {
                $scope.quotes = quotes;
            });
    }

    getQuotes();
    
    $scope.$on('quote-added', getQuotes);


}]);
