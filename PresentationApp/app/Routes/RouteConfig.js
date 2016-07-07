var app;
(function (app) {
    var Routes;
    (function (Routes) {
        var RouteConfig = (function () {
            function RouteConfig($routeProvider) {
                var appPath = '/app/MovieStore/';
                $routeProvider
                    .when("/store/movieList", {
                    templateUrl: appPath + "Views/MovieList.html",
                    controller: "MovieListCtrl as mlCtrl"
                })
                    .otherwise("/store");
            }
            RouteConfig.$inject = ["$routeProvider"];
            return RouteConfig;
        }());
        Routes.RouteConfig = RouteConfig;
    })(Routes = app.Routes || (app.Routes = {}));
})(app || (app = {}));
