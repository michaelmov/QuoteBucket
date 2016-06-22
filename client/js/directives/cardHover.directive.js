'use strict';

app.directive('cardHover', function () {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.on('mouseenter', function(event) {
                $('.action-buttons', this).removeClass('hidden');
            });
            element.on('mouseleave', function(event) {
                $('.action-buttons', this).addClass('hidden');
            });
        }
    }
});