'use strict';

var app = angular.module('quoteBucketApp', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
]);

app.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/partials/main.html',
            controller: 'mainController'
        })
        .when('/two', {
            templateUrl: 'views/partials/two.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});