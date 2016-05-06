angular.module('templates-main', ['../public/app/modules/user/views/user.list.tpl.html', '../public/app/modules/user/views/user.view.tpl.html']);

angular.module("../public/app/modules/user/views/user.list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/user/views/user.list.tpl.html",
    "<div layout=\"column\">\n" +
    "    <md-toolbar class=\"md-view\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <h2 class=\"md-flex\"><a href=\"/#/\">Users list</a></h2>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content>\n" +
    "        <table class=\"user-list\">\n" +
    "            <tr>\n" +
    "                <th>Name</th>\n" +
    "                <th>User Name</th>\n" +
    "                <th>Email</th>\n" +
    "                <th></th>\n" +
    "\n" +
    "            </tr>\n" +
    "            <tr ng-repeat=\"user in uCtrl.users\">\n" +
    "                {{user}}\n" +
    "                <td>{{user.name}}</td>\n" +
    "                <td>{{user.username}}</td>\n" +
    "                <td>{{user.email}}</td>\n" +
    "                <td><a ng-click=\"uCtrl.showView(user)\">View</a></td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "</md-content>\n" +
    "</div>");
}]);

angular.module("../public/app/modules/user/views/user.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/modules/user/views/user.view.tpl.html",
    "<md-dialog class=\"user-view\">\n" +
    "    <md-toolbar>\n" +
    "        <h2 class=\"md-toolbar-tools\">\n" +
    "            <span flex>{{uvCtrl.user.name}}</span>\n" +
    "        </h2>\n" +
    "    </md-toolbar>\n" +
    "    <md-content flex layout-padding>\n" +
    "        <h3>General information</h3>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Full name: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.name}}</span>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Username: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.username}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Email: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.email}}</span>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Phone: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.phone}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Website: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span><a href=\"http://{{uvCtrl.user.website}}\" target=\"_blank\">{{uvCtrl.user.website}}</a></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <h3>Company</h3>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Company name: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.company.name}}</span>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Catch Phrase: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.company.catchPhrase}}</span>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>BS: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.company.bs}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <h3>Address</h3>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Street: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.address.street}}</span>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Suite: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.address.suite}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>City: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.address.city}}</span>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Zipcode: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.address.zipcode}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <h4>Geo</h4>\n" +
    "        <div layout=\"row\">\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Latitude: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.address.geo.lat}}</span>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex=\"15\">\n" +
    "                <label>Longitude: </label>\n" +
    "            </div>\n" +
    "            <div layout=\"column\" flex>\n" +
    "                <span>{{uvCtrl.user.address.geo.lng}}</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <md-dialog-actions layout=\"row\">\n" +
    "            <md-button class=\"md-raised md-primary\" layout-align=\"center end\" ng-click=\"uvCtrl.close()\">\n" +
    "                Close\n" +
    "            </md-button>\n" +
    "        </md-dialog-actions>\n" +
    "\n" +
    "    </md-content>\n" +
    "</md-dialog>");
}]);
