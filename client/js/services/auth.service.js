'use strict';

app.service('authService', ['$http', '$window', '$rootScope', '$timeout', function ($http, $window, $rootScope, $timeout) {

    var saveToken = function(token) {
        $window.localStorage['quotebucket-token'] = token;
    };
    
    var getToken = function() {
        return $window.localStorage['quotebucket-token'];
    };

    var isLoggedIn = function () {
        var token = getToken();
        var payload;

        if(token) {
            payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);

            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };

    var currentUser = function() {
        if(isLoggedIn()){
            var token = getToken();
            var payload = token.split('.')[1];
            payload = $window.atob(payload);
            payload = JSON.parse(payload);
            return {
                email : payload.email,
                name : payload.name
            };
        }
    };

    var register = function(user) {
        return $http.post('/api/auth/register', user).success(function(data) {
            saveToken(data.token);

        });
    };

    var login = function (user) {
        return $http.post('/api/auth/login', user).success(function(data) {
            saveToken(data.token);
            $rootScope.$broadcast('login-done');
        });
    };

    var logout = function () {
        $window.localStorage.removeItem('quotebucket-token')
    };


    return ({
        saveToken: saveToken,
        getToken: getToken,
        isLoggedIn: isLoggedIn,
        currentUser: currentUser,
        register: register,
        login: login,
        logout: logout
    });

}]);
