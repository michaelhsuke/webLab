/**
 * Created by xuke on 2016/1/14.
 */
angular.module('myApp', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('app', {
                url: '/home',
                abstract: true,
                template: '<ui-view></ui-view>'
            })
            .state('app.home', {
                url: '',
                templateUrl: 'templates/home.html'
            })
            .state('app.content', {
                url: '/content',
                templateUrl: 'templates/content.html'
                //template: '<h1>This is content page!</h1>'
            })
    });