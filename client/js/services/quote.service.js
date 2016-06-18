'use strict';

app.service('quoteService', ['$q', '$timeout', '$http', function ($q, $timeout, $http) {

    function getQuotes() {
        return $http.get('/api/quotes')
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