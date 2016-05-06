;(function () {
    'use strict';

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

})();