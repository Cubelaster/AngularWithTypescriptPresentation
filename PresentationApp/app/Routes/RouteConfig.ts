namespace app.Routes {
    export class RouteConfig {
        static $inject = ["$routeProvider"];
        constructor($routeProvider: ng.route.IRouteProvider) {
            var appPath: string = '/app/MovieStore/';
            $routeProvider
                .when("/store/movieList",{
                    templateUrl: appPath + "Views/MovieList.html",
                    controller: "MovieListCtrl as mlCtrl"
                })
                .when("/store/movieList/:id", {
                    templateUrl: appPath + "Views/MovieDetails.html",
                    controller: "MovieDetailsCtrl as mdCtrl"
                })
                .otherwise("/store");
        }
    }
}