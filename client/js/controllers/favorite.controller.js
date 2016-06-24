'use strict';

app.controller('favoriteController', ['$scope', '$http', '$sce', 'quoteService', function($scope, $http, quoteService) {
    $scope.pageHeading = 'Favorite Quotes';
}]);