/**
 * Created by xuke on 1/16/16.
 */
angular.module('ionic-http-auth.services', ['http-auth-interceptor'])
    .factory('AuthenticationService', function ($rootScope, $http, authService, $httpBackend) {
        var service = {
            login: function (user) {
                $http.post('https://login', {user: user}, {ignoreAuthModule: true})
                    .success(function (data, status, headers, config) {
                        alert('login called');  // tbd
                        $http.defaults.headers.common.Authorization = data.authorizationToken;
                        //alert($http.defaults.headers.common.Authorization)

                        authService.loginConfirmed(data, function (config) {
                            config.headers.Authorization = data.authorizationToken;
                            return config;
                        });
                    })
                    .error(function (data, status, headers, config) {
                        $rootScope.$broadcast('event:auth-login-failed', status);
                    });
            },
            logout: function (user) {
                //alert('in logout!');
                $http.post('https://logout', {}, {ignoreAuthModule: true})
                    .success(function (data, status, headers, config) {
                        alert('status: ' + status);  // tbd
                        //alert('status' + JSON.stringify(data));  // tbd
                    })
                    .finally(function (data) {
                        //alert(JSON.stringify(data));  // tbd
                        //alert(JSON.stringify($http.defaults.headers.common));
                        //alert($http.defaults.headers.common.Authorization);  // tbd
                        delete $http.defaults.headers.common.Authorization;
                        $rootScope.$broadcast('event:auth-logout-complete');
                    })
            },
            loginCancelled: function () {
                authService.loginCancelled();
            }
        };
        return service;
    });