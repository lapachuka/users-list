;
(function () {
    'use strict';

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

})();