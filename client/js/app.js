'use strict';

var app = angular.module('quoteBucketApp', [
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider

        .when('/app', {
            templateUrl: 'views/partials/main.html',
            controller: 'mainController'
        })
        .when('/app/favorite', {
            templateUrl: 'views/partials/main.html',
            controller: 'favoriteController'
        })
        .when('/login', {
            templateUrl: 'views/partials/login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: 'views/partials/register.html',
            controller: 'registerController'
        })
        .otherwise({
            redirectTo: '/app'
        });

    //Use the HTML5 History API
    $locationProvider.html5Mode(true);


    // Intercept requests
    $httpProvider.interceptors.push(['$q', '$location', '$injector', function ($q, $location, $injector) {
        return {
            request: function(config) {
                var authService = $injector.get('authService');
                config.headers = config.headers || {};
                if (authService.isLoggedIn()) {
                    config.headers.Authorization = authService.getToken();
                }
                return config;
            },
            response: function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return response;
            }
        };
    }]);
}]);


app.run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if($location.path() === '/app' && !authService.isLoggedIn()) {
            $location.path('/login');
        }
    });
}]);