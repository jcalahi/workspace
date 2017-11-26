(function() {
    'use strict';
    angular.module('workspace', ['ui.router']).config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'main.html'
            })
            .state('page1', {
                url: '/page1',
                templateUrl: 'src/directives/buttonDirective.html'
            });

        $locationProvider.html5Mode(true);
    }
})();