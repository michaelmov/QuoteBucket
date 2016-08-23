'use strict';

app.directive('quoteCard', function () {
    return {
        restrict: 'E',
        templateUrl: '/views/templates/quoteCard.template.html',
        transclude: true,
        link: function($scope) {
            $scope.controls = {
                isHidden: true
            };

            $scope.showControls = function() {

                $scope.controls.isHidden = false;
            };

            $scope.hideControls = function() {

                $scope.controls.isHidden = true;
            };

        }
    }
});