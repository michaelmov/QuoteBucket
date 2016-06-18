'use strict';

app.directive('navigation', function() {
    return {
        restrict: 'EA',
        templateUrl: '/views/templates/navigation.template.html',
        controller: 'navigationCtrl'
    };
});