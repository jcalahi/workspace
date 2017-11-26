(function() {
    'use strict';
    angular.module('workspace').directive('appDirective', [
        function() {
            return {
                restrict: 'E',
                scope: {
                    title: '=',
                    list: '='
                },
                link: function(scope, elem, attrs) {
                    scope.linkMessage = 'Link Message';
                    scope.items = 0;
                    
                    scope.addToCart = function() {
                        scope.items++;
                    };
                },
                template: 
                    '<div>' +
                        '<h2 ng-bind="::title"></h2>' + 
                        '<ul ng-repeat="food in ::list">' + 
                            '<li ng-click="addToCart()" ng-bind="::food"></li>' + 
                        '</ul>' + 
                    '</div>'
            };
        }
    ]);
})();