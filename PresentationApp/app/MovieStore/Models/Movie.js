var app;
(function (app) {
    var MovieStore;
    (function (MovieStore) {
        var Models;
        (function (Models) {
            var Movie = (function () {
                function Movie(id, productName, productPrice, productDescription, movieRating, maxRentalPeriod, movieGenre, lastRentalDate, imageUrl) {
                    var _this = this;
                    this.id = id;
                    this.productName = productName;
                    this.productPrice = productPrice;
                    this.productDescription = productDescription;
                    this.movieRating = movieRating;
                    this.maxRentalPeriod = maxRentalPeriod;
                    this.movieGenre = movieGenre;
                    this.lastRentalDate = lastRentalDate;
                    this.imageUrl = imageUrl;
                    this.rentIt = function () {
                        _this.lastRentalDate = new Date();
                    };
                    this.shouldBeReturned = function () {
                        if (_this.lastRentalDate === undefined) {
                            return 'Movie is available';
                        }
                        else {
                            var dueDate = new Date(_this.lastRentalDate
                                .setTime(_this.lastRentalDate.getTime() +
                                _this.maxRentalPeriod * 86400000));
                            return dueDate;
                        }
                    };
                }
                return Movie;
            }());
            Models.Movie = Movie;
        })(Models = MovieStore.Models || (MovieStore.Models = {}));
    })(MovieStore = app.MovieStore || (app.MovieStore = {}));
})(app || (app = {}));
