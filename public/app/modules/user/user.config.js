;(function() {
    'use strict';

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

})();