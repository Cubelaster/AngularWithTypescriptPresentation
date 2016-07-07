var app;
(function (app) {
    var MovieStore;
    (function (MovieStore) {
        var Controllers;
        (function (Controllers) {
            var MovieListCtrl = (function () {
                function MovieListCtrl() {
                    this.fetchMovieList = function () {
                        return;
                    };
                    var controller = this;
                    controller.title = 'List of movies';
                }
                return MovieListCtrl;
            }());
            Controllers.MovieListCtrl = MovieListCtrl;
            angular.module('movieStore')
                .controller('MovieListCtrl', MovieListCtrl);
        })(Controllers = MovieStore.Controllers || (MovieStore.Controllers = {}));
    })(MovieStore = app.MovieStore || (app.MovieStore = {}));
})(app || (app = {}));
