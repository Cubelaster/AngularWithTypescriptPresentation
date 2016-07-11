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
                        var movie = _this;
                        if (movie._lastRentalDate === undefined) {
                            return 'Movie is available';
                        }
                        else {
                            var dueDate = movie._lastRentalDate.getDate() + movie.maxRentalPeriod;
                            return (dueDate + '.' + (parseInt(movie._lastRentalDate.getMonth().toFixed()) + 1) + '.' + movie._lastRentalDate.getFullYear());
                        }
                    };
                    this.getVoteCount = function () {
                        return _this.voteCount;
                    };
                    this.rentIt = function () {
                        _this.lastRentalDate = new Date();
                        alert('Rented');
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
                        return movie._lastRentalDate;
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
