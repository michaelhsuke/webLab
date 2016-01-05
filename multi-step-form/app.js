/**
 * source url: https://scotch.io/tutorials/angularjs-multi-step-form-using-ui-router
 * Created by xuke on 2016/1/5.
 */
angular.module('formApp', ['ngAnimate', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // url: /form
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })

            // url: /form/profile
            .state('form.profile', {
                url: '/profile',
                templateUrl: 'form-profile.html'
            })

            // url: /form/interests
            .state('form.interests', {
                url: '/interests',
                templateUrl: 'form-interests.html'
            })

            // url: /form/payment
            .state('form.payment', {
                url: '/payment',
                templateUrl: 'form-payment.html'
            });

        $urlRouterProvider.otherwise('/form/profile');
    })
    .controller('formController', function ($scope) {
        $scope.formData = {};

        $scope.processForm = function () {
            alert('awesome!')
        };
    });