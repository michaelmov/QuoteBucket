'use strict';

app.controller('mainController',['$scope', '$http', '$sce', 'QuoteService', function($scope, $http, $sce, QuoteService) {

    QuoteService.getQuotes()
        .then(function(quotes) {
            $scope.quotes = quotes;
        });
    // $scope.popoverData = {
    //     templateUrl: '../../views/partials/popover.html'
    // };
        // $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');
}]);
