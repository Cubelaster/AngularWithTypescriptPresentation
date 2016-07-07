namespace app {

    var application = angular.module("movieStore", [
        "ngRoute",
        "app.common.mockedServices",
        "app.common.MockedDB"
    ])
        .config(app.Routes.RouteConfig);
}