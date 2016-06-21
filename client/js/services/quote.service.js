'use strict';

app.service('quoteService', ['$q', '$timeout', '$http', '$rootScope', function ($q, $timeout, $http, $rootScope) {

    function getQuotes() {
        return $http.get('/api/quotes')
            .then(function(response) {
                return response.data;
            });
    }

    function addQuote(quote) {
        return $http.post('/api/quotes/create', quote)
            .then(function(response) {
                $rootScope.$broadcast('quote-added');
                return response.data;
            });
    }

    function deleteQuote(quoteId) {
        return $http.delete('/api/quotes/delete/' + quoteId)
            .then(function(response) {
                return response.data;
            });
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