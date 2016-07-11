'use strict';

app.directive('mobileNavigation', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: '/views/templates/mobileNavigation.template.html',
        link: function ($scope) {

            $scope.toggleMobileNav = function() {
                $scope.mobileNavigation.isOpen = !$scope.mobileNavigation.isOpen
            };
        }
    }
});
