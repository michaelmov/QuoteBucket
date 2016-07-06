'use strict';

app.directive('navigation', function() {
    return {
        restrict: 'E',
        templateUrl: '/views/templates/navigation.template.html',
        controller: 'navigationCtrl'
    };
});