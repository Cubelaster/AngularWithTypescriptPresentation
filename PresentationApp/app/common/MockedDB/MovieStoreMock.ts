module app.common.MovieStoreMock {
    var mockedResource = angular.module("app.common.movieStoreMock", ["ngMockE2E"]);

    mockedResource.run(mockedResourceRun);

    mockedResourceRun.$inject = ["$httpBackend"];

    function mockedResourceRun($httpBackend: ng.IHttpBackendService): void {
        var movieList: app.MovieStore.Models.Movie[] = [];
        var movie: app.MovieStore.Models.Movie;
        let movieListUrl = "/store/movies";
        let idMatcherRegex = new RegExp(movieListUrl + "/[0-9][0-9]*", '');

        movie = new app.MovieStore.Models.Movie(1, 'Deadpool', 3.75, 'Merc with a mouth',
            'R', 3, 'Action/Comedy');
        movieList.push(movie);

        $httpBackend.whenGET(movieListUrl).respond(movieList);

        $httpBackend.whenGET(idMatcherRegex).respond(function (method, url, data) {
            var product = { "id": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = +parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < movieList.length; i++) {
                    if (movieList[i].id == id) {
                        product = movieList[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        // Catch all for testing purposes
        $httpBackend.whenGET(/store/).respond(function (method, url, data) {
            return [200, movieList, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }
}