'use strict';

app.controller('editQuoteModalController', ['$scope','$uibModalInstance', 'quote', 'ngToast', 'quoteService',
    function($scope, $uibModalInstance, quote, ngToast, quoteService) {
        $scope.quote = quote;

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        $scope.save = function() {
            return quoteService.updateQuote($scope.quote)
                .then(function() {
                    $uibModalInstance.close();
                        ngToast.success({
                            content: 'Saved'
                        });
                });
        }
    }
]);
