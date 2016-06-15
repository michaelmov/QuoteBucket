'use strict';

app.controller('mainController',['$scope', '$http', '$sce', 'quoteService', function($scope, $http, $sce, quoteService) {

    quoteService.getQuotes()
        .then(function(quotes) {
            $scope.quotes = quotes;
        });
      
    $scope.popoverData = {
        templateUrl: '../../views/templates/popover.html'
    };
        // $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');
}]);
