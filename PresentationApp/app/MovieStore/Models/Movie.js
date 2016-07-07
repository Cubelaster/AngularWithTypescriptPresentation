var app;
(function (app) {
    var MovieStore;
    (function (MovieStore) {
        var Models;
        (function (Models) {
            var Movie = (function () {
                function Movie(id, productName, productPrice, productDescription, movieRating, maxRentalPeriod, movieGenre, _lastRentalDate, imageUrl) {
                    var _this = this;
                    this.id = id;
                    this.productName = productName;
                    this.productPrice = productPrice;
                    this.productDescription = productDescription;
                    this.movieRating = movieRating;
                    this.maxRentalPeriod = maxRentalPeriod;
                    this.movieGenre = movieGenre;
                    this._lastRentalDate = _lastRentalDate;
                    this.imageUrl = imageUrl;
                    this.getDueDate = function () {
                        return _this.lastRentalDate;
                    };
                    this.rentIt = function () {
                        // this._lastRentalDate = new Date();
                    };
                    var movie = this;
                }
                Object.defineProperty(Movie.prototype, "lastRentalDate", {
                    get: function () {
                        var movie = this;
                        if (movie._lastRentalDate === undefined) {
                            return 'Movie is available';
                        }
                        else {
                            var dueDate = new Date(movie._lastRentalDate
                                .setTime(movie._lastRentalDate.getTime() +
                                movie.maxRentalPeriod * 86400000));
                            return dueDate;
                        }
                    },
                    set: function (dueDate) {
                        var movie = this;
                        movie._lastRentalDate = dueDate;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Movie;
            }());
            Models.Movie = Movie;
        })(Models = MovieStore.Models || (MovieStore.Models = {}));
    })(MovieStore = app.MovieStore || (app.MovieStore = {}));
})(app || (app = {}));
