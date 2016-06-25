'use strict';

app.controller('favoriteController', ['$scope', '$controller', function($scope, $controller) {
    $controller('mainController', {$scope: $scope});

    $scope.pageHeading = 'Favorite Quotes';

}]);