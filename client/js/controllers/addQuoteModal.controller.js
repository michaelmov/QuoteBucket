'use strict';

app.controller('addQuoteModalController', ['$scope','$uibModalInstance', 'ngToast', 'quoteService',
    function($scope, $uibModalInstance, ngToast, quoteService) {
        $scope.newQuote = {
            text: '',
            author: '',
            source: ''
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        $scope.save = function() {
            return quoteService.addQuote($scope.newQuote)
                .then(function() {
                    $uibModalInstance.close();
                });
        }
    }
]);
