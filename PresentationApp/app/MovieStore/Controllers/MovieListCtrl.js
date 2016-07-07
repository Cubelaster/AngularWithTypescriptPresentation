var app;
(function (app) {
    var MovieStore;
    (function (MovieStore) {
        var Controllers;
        (function (Controllers) {
            var MovieListCtrl = (function () {
                function MovieListCtrl(dataAccessService) {
                    var _this = this;
                    this.dataAccessService = dataAccessService;
                    this.fetchMovieList = function () {
                        return;
                    };
                    var controller = this;
                    controller.title = 'List of movies';
                    controller.sortColumn = 'productName';
                    var moviesResource = dataAccessService.getProductResource();
                    moviesResource.query(function (data) {
                        _this.movieList = data;
                    });
                }
                MovieListCtrl.$inject = ["dataAccessService"];
                return MovieListCtrl;
            }());
            Controllers.MovieListCtrl = MovieListCtrl;
            angular.module('movieStore')
                .controller('MovieListCtrl', MovieListCtrl);
        })(Controllers = MovieStore.Controllers || (MovieStore.Controllers = {}));
    })(MovieStore = app.MovieStore || (app.MovieStore = {}));
})(app || (app = {}));
