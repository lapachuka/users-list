angular
    .module('app', [
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'templates-main', // we are using angularjs template cache
        'user'
    ]);;angular
    .module('user', []);
;;
(function () {
    'use strict';

    userController.$inject = ['User', '$mdDialog', '$mdMedia', '$stateParams', '$location'];
    angular
        .module('user')
        .controller('userController', userController);

    /*@ngInject*/
    function userController(User, $mdDialog, $mdMedia, $stateParams, $location) {
        var self = this,
            currentUserId;

        self.showView = showView;
        currentUserId = parseInt($stateParams.userId); //save userId if it is there

        User.getList()
            .then(function (response) {
                self.users = response;
                if (currentUserId) {
                    openViewWindow();
                }
            });


        function openViewWindow() {
            angular.forEach(self.users, function (user) {
                if (user.id === currentUserId) { //before show user view we need to find current user model in collection
                    showUserView(user);
                }
            });
        }

        function showUserView(user) {
            $mdDialog.show({
                controller: 'userViewController as uvCtrl',
                templateUrl: '../public/app/modules/user/views/user.view.tpl.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: $mdMedia('sm'),
                locals: {
                    user: user  //send to user.view controller currentUser
                },
                onRemoving: function () {
                    $location.path('/'); //Turn back link position after modal dialog is closed
                }
            });
        }


        function showView(user) {
            $location.path(user.id).replace(); //for saving user id in url the url should be changed
        }
    }

})();;;(function () {
    'use strict';

    userViewController.$inject = ['user', '$mdDialog'];
    angular
        .module('user')
        .controller('userViewController', userViewController);

    /*@ngInject*/
    function userViewController(user, $mdDialog) {
        var self = this;

        self.user = user;

        self.close = closeDialog;

        function closeDialog(){
            $mdDialog.hide();
        }
    }

})();;;(function() {
    'use strict';

    config.$inject = ['$stateProvider', '$locationProvider'];
    angular
        .module('user')
        .config(config);

    /*@ngInject*/
    function config ($stateProvider, $locationProvider) {
        $stateProvider
            .state('user', {
                url: "/{userId}",
                templateUrl: "../public/app/modules/user/views/user.list.tpl.html",
                controller: "userController as uCtrl"

            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

})();;(function () {
    'use strict';

    User.$inject = ['$http', '$q'];
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