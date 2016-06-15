'use strict';

app.service('quoteService', ['$q', '$timeout', '$http', 'authService', function ($q, $timeout, $http, authService) {

    function getQuotes() {
        return $http.get('/api/quotes', {
            headers: {
                Authorization: 'Bearer '+ authService.getToken()
            }
        })
        .then(function(response) {
            return response.data;
        });
    }

    function addQuote() {

    }

    function deleteQuote() {

    }

    function updateQuote() {

    }

    return ({
        getQuotes: getQuotes,
        addQuote: addQuote,
        deleteQuote: deleteQuote,
        updateQuote: updateQuote
    });



}]);