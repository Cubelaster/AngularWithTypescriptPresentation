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
                            var newMovie = new app.MovieStore.Models.Movie(_this.movie.id, _this.movie.productName, _this.movie.productPrice, _this.movie.productDescription, _this.movie.movieRating, _this.movie.maxRentalPeriod, _this.movie.movieGenre, _this.movie.lastRentalDate, _this.movie.imageUrl);
                            _this.dataAccessService.movieList.push(newMovie);
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
