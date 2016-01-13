/**
 * Created by xuke on 2016/1/13.
 */
var app = angular.module('ionicApp', ['ionic']);

// config
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/todos');

    $stateProvider
        .state('todos', {
            abstract: true,
            url: '/todos',
            views: {
                todos: {
                    template: '<ion-nav-view></ion-nav-view>'
                }
            }
        })
        .state('todos.index', {
            url: '',
            templateUrl: 'todos.html',
            controller: 'TodosCtrl'
        })
        .state('todos.detail', {
            url: '/:todo',
            templateUrl: 'todo.html',
            controller: 'TodoCtrl',
            resolve: {
                todo: function ($stateParams, TodosService) {
                    return TodosService.getTodo($stateParams.todo)
                }
            }
        })
});

// factory
app.factory('TodosService', function () {
    var todos = [
        {title: 'Take out the trash', done: true},
        {title: 'Do laundry', done: false},
        {title: 'Start cooking dinner', done: false}
    ];

    return {
        todos: todos,
        getTodo: function (index) {
            return todos[index];
        }
    }
});

// controllers
app
    .controller('TodosCtrl', function ($scope, TodosService) {
        $scope.todos = TodosService.todos;
    })
    .controller('TodoCtrl', function ($scope, todo) {
        $scope.todo = todo;
    });