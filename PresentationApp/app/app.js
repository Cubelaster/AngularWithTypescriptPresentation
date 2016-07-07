var app;
(function (app) {
    var application = angular.module("movieStore", [
        "ngRoute"
    ])
        .config(app.Routes.RouteConfig);
})(app || (app = {}));
