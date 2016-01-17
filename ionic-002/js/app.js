/**
 * Created by xuke on 1/16/16.
 */
angular.module('ionic-http-auth', ['ionic', 'ngMockE2E', 'ionic-http-auth.services', 'ionic-http-auth.controllers'])
    .run(function ($rootScope, $ionicPlatform, $httpBackend, $http) {
        var authorized = false;
        var customers = [{name: 'John Smith'}, {name: 'Tim Johnson'}];

        $httpBackend.whenGET('https://customers').respond(function (method, url, data, headers) {
            alert('https://customers: ' + authorized)
            return authorized ? [200, customers] : [401];
        });

        $httpBackend.whenPOST('https://login').respond(function (method, url, data) {
            authorized = true;
            return [200, {authorizationToken: 'abdkfkjdlfjaslfjlfjdlfsj'}];
        });

        $httpBackend.whenPOST('https://logout').respond(function (method, url, data) {
            alert('https://logout ' + authorized);
            authorized = false;
            return [200];
        });

        $httpBackend.whenGET(/.*/).passThrough();
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        controller: 'HomeCtrl',
                        templateUrl: 'templates/home.html'
                    }
                }
            })
            .state('app.customers', {
                url: '/customers',
                views: {
                    'menuContent': {
                        controller: 'CustomerCtrl',
                        templateUrl: 'templates/customers.html'
                    }
                }
            })
            .state('app.logout', {
                url: '/logout',
                views: {
                    'menuContent': {
                        controller: 'LogoutCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/app/home');
    });