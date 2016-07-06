'use strict';

app.directive('mobileNavigation', function() {
    return {
        restrict: 'E',
        templateUrl: '/views/templates/mobileNavigation.template.html',
        controller: 'navigationCtrl'
        }
});
