/**
 * Created by xuke on 2016/1/14.
 */
//http://www.sitepoint.com/practical-guide-angularjs-directives/
var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
    $scope.foo = 'bar';
    $scope.color = 'green';
});

app.directive('helloWorld', function () {
    return {
        restrict: 'AE',
        replace: 'true',
        template: '<p style="background-color: {{color}}">Hello World</p>',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                elem.css('background-color', 'red');
                scope.$apply(function () {
                    scope.color = 'red';
                });
            });

            elem.bind('mouseover', function () {
                elem.css('cursor', 'pointer')
            })
        }
    }
});