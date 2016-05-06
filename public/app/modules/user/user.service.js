(function () {
    'use strict';

    angular.module('user')
        .factory('User', User);

    /*@ngInject*/
    function User($http, $q) {
        "use strict";

        var userList = [];

        return {
            getList: getList
        };


        function getList() {
            var deffered = $q.defer(),
                getUserUrl = 'http://jsonplaceholder.typicode.com/users';

            if (!userList.length) { //we need load user list just one time
                $http.get(getUserUrl)
                    .then(function (response) {
                        fillUserList(response.data);
                        deffered.resolve(userList);
                    }, function () {
                        deffered.reject([]);
                    });
            } else {
                deffered.resolve(userList);
            }

            return deffered.promise;
        }

        function fillUserList(data) {
            angular.forEach(data, function (user) {
                userList.push(user)
            });
        }
    }
})();