var app;
(function (app) {
    var MovieStore;
    (function (MovieStore) {
        var Controllers;
        (function (Controllers) {
            var CreateMovieCtrl = (function () {
                function CreateMovieCtrl(dataAccessService) {
                    var _this = this;
                    this.dataAccessService = dataAccessService;
                    this.createMovie = function (movie, MovieForm) {
                        if (MovieForm.$valid) {
                            var id = _this.dataAccessService.movieList.length + 1;
                            _this.movie.id = id;
                            _this.movie.voteCount = 0;
                            _this.movie.lastRentalDate = undefined;
                            _this.dataAccessService.movieList.push(_this.movie);
                            alert('Successfully created!');
                        }
                    };
                    var controller = this;
                    controller.title = 'Add a movie';
                }
                CreateMovieCtrl.$inject = ["dataAccessService"];
                return CreateMovieCtrl;
            }());
            Controllers.CreateMovieCtrl = CreateMovieCtrl;
            angular.module('movieStore')
                .controller('CreateMovieCtrl', CreateMovieCtrl);
        })(Controllers = MovieStore.Controllers || (MovieStore.Controllers = {}));
    })(MovieStore = app.MovieStore || (app.MovieStore = {}));
})(app || (app = {}));
