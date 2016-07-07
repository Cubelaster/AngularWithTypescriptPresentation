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
                    this.getVoteCount = function () {
                        return _this.voteCount;
                    };
                    this.rentIt = function () {
                        // this._lastRentalDate = new Date();
                    };
                    this.upVoteMovie = function () {
                        _this._voteCount++;
                    };
                    this.downVoteMovie = function () {
                        _this._voteCount--;
                    };
                    var movie = this;
                    movie._voteCount = 0;
                }
                Object.defineProperty(Movie.prototype, "voteCount", {
                    get: function () {
                        return this._voteCount;
                    },
                    enumerable: true,
                    configurable: true
                });
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
