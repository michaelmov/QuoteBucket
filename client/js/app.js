'use strict';

var app = angular.module('quoteBucketApp', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/partials/main.html',
            controller: 'mainController'
        })
        .when('/login', {
            templateUrl: 'views/partials/login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: 'views/partials/register.html',
            controller: 'registerController'
        })
        .when('/two', {
            templateUrl: 'views/partials/two.html'
        })
        .otherwise({
            redirectTo: '/'
        });

    //Use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if($location.path() === '/' && !authService.isLoggedIn()) {
            $location.path('/login');
        }
    });
}]);