module app.common.MockedDB {
    
    var mockedResource = angular.module("app.common.MockedDB", ["ngMockE2E"]);

    mockedResource.run(mockedResourceRun);

    mockedResourceRun.$inject = ["$httpBackend"];
    function mockedResourceRun($httpBackend: ng.IHttpBackendService): void {
        var movieList: app.MovieStore.Contracts.ModelContracts.IMovieContract[] = [];
        var movie: app.MovieStore.Contracts.ModelContracts.IMovieContract;
        let movieListUrl = "/movieList";
        let idMatcherRegex = new RegExp(movieListUrl + "/[0-9]*", '');

        movie = new app.MovieStore.Models.Movie(1, 'Deadpool', 3.75, 'Merc with a mouth',
            'R', 3, 'Action, Comedy', undefined , 'http://www.flickeringmyth.com/wp-content/uploads/2016/01/Deadpool-poster-2-600x875.jpg');
        movieList.push(movie);

        movie = new app.MovieStore.Models.Movie(2, 'Suicide Squad', 2.75, 'Suicide Squad',
            'PG-13', 3, 'Action, Crime, Fantasy', undefined , 'https://i.ytimg.com/vi/E7N2zqCPMN0/hqdefault.jpg');
        movieList.push(movie);

        movie = new app.MovieStore.Models.Movie(3, 'Wonder Woman', 4.75, 'Wonder Woman',
            'PG-13', 3, 'Action, Fantasy', undefined , 'http://cdn.bleedingcool.net/wp-content/uploads/2016/03/WW_Cv50_CONVENTION_VAR_56d5f0321ee092.30051088-228x350.jpg');
        movieList.push(movie);

        movie = new app.MovieStore.Models.Movie(4, 'The Legend of Tarzan', 2.25, 'Tarzan',
            'PG-13', 3, 'Action, Adventure', undefined , 'http://www.screenfantastique.com/uploads/1/9/6/2/19626163/3468549_orig.jpg?425');
        movieList.push(movie);

        movie = new app.MovieStore.Models.Movie(5, 'Independance day', 3.75, "'Merica",
            'PG-13', 3, 'Action, Adventure, Sci-Fi', undefined , 'https://yts.ag/assets/images/movies/Independence_Day_1996/large-cover.jpg');
        movieList.push(movie);

        $httpBackend.whenGET(movieListUrl).respond(movieList);

        $httpBackend.whenGET(idMatcherRegex).respond(function (method, url, data) {
            var movie = { "id": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = +parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < movieList.length; i++) {
                    if (movieList[i].id == id) {
                        movie = movieList[i];
                        break;
                    }
                }
            }
            return [200, movie, {}];
        });

        // Catch all for testing purposes
        $httpBackend.whenGET(/store/).respond(function (method, url, data) {
            return [200, movieList, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }
}