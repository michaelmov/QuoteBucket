'use strict';

app.service('QuoteService', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {

    function getQuotes() {
        return $http.get('/api/quotes')
            .then(function(response) {
                return response.data;
            });
    }

    function addQuote() {

    }

    return ({
        getQuotes: getQuotes,
        addQuote: addQuote
    });



}]);