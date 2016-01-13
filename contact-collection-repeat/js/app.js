/**
 * Created by xuke on 2016/1/9.
 */

angular.module('wecardApp', ['ionic'])
    .controller('MainCtrl', function ($scope, $ionicScrollDelegate) {
        var letters = $scope.letters = [];
        var contacts = $scope.contacts = [];
        var currentCharCode = 'A'.charCodeAt(0) - 1;

        window.CONTACTS
            .sort(function (a, b) {
                return a.last_name > b.last_name ? 1 : -1;
            })
            .forEach(function (person) {

                var personCharCode = person.last_name.toUpperCase().charAt(0);
                var difference = personCharCode - currentCharCode;
                for (var i = 1; i <= difference; i++) {
                    addLetter(currentCharCode + i);
                }

                currentCharCode = personCharCode;
                contacts.push(person)
            });

        for (var i = currentCharCode + 1; i < 'Z'; i++) {
            addLetter(i);
        }

        function addLetter(code) {
            var letter = String.fromCharCode(code);
            contacts.push({
                isLetter: true,
                letter: letter
            })
            letters.push(letter);
        }

        $scope.getItemHeight = function (item) {
            return item.isLetter ? 40 : 100;
        };

        $scope.scrollBottom = function() {
            $ionicScrollDelegate.scrollBottom(true);
        };
    })