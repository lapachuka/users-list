;(function() {
    'use strict';

    angular
        .module('user')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config ($stateProvider) {
        $stateProvider
            .state('user', {
                url: "/{userId}",
                templateUrl: "../public/app/modules/user/views/user.list.tpl.html",
                controller: "userController as uCtrl"

            })
    }

})();