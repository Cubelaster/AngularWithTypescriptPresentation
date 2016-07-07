namespace app.Routes {
    export class RouteConfig {
        static $inject = ["$routeProvider"];
        constructor($routeProvider: ng.route.IRouteProvider) {
            var appPath: string = '/app/MovieStore/';
            $routeProvider
                .when("/store/movieList",{
                    templateUrl: appPath+"Views/MovieList.html",
                    controller: "MovieListCtrl as mlCtrl"
                })
                .otherwise("/store");
        }
    }
}