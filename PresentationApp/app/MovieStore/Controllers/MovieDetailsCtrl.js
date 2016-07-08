var app;
(function (app) {
    var MovieStore;
    (function (MovieStore) {
        var Controllers;
        (function (Controllers) {
            var MovieDetailsCtrl = (function () {
                function MovieDetailsCtrl($routeParams, dataAccessService) {
                    var _this = this;
                    this.$routeParams = $routeParams;
                    this.dataAccessService = dataAccessService;
                    this.saveMovie = function (movie, MovieForm) {
                        if (MovieForm.$valid) {
                            for (var i = 0; i < _this.dataAccessService.movieList.length; i++) {
                                var existingMovie = _this.dataAccessService.movieList[i];
                                if (existingMovie.id === _this.movie.id) {
                                    _this.dataAccessService.movieList[i] = _this.movie;
                                    break;
                                }
                            }
                            alert('Successfully saved!');
                        }
                        else {
                            alert('Form is invalid!');
                        }
                    };
                    this.createMovie = function (movie, MovieForm) {
                        if (MovieForm.$valid) {
                            var id = _this.dataAccessService.movieList.length + 1;
                            _this.movie.id = id;
                            _this.dataAccessService.movieList.push(_this.movie);
                            alert('Successfully saved!');
                        }
                        else {
                            alert('Form is invalid!');
                        }
                    };
                    var controller = this;
                    controller.title = 'Movie Details';
                    for (var i = 0; i < this.dataAccessService.movieList.length; i++) {
                        var existingMovie = this.dataAccessService.movieList[i];
                        if (existingMovie.id == this.$routeParams.id) {
                            controller.movie = existingMovie;
                        }
                    }
                    // var movieResource = dataAccessService.getProductResource();
                    // movieResource.get({ id: $routeParams.id },
                    //     (data: app.MovieStore.Models.Movie) => {
                    //         this.movie = data;
                    //     })
                }
                MovieDetailsCtrl.$inject = ["$routeParams", "dataAccessService"];
                return MovieDetailsCtrl;
            }());
            Controllers.MovieDetailsCtrl = MovieDetailsCtrl;
            angular.module('movieStore')
                .controller('MovieDetailsCtrl', MovieDetailsCtrl);
        })(Controllers = MovieStore.Controllers || (MovieStore.Controllers = {}));
    })(MovieStore = app.MovieStore || (app.MovieStore = {}));
})(app || (app = {}));
