var app;
(function (app) {
    var MovieStore;
    (function (MovieStore) {
        var Controllers;
        (function (Controllers) {
            var MovieDetailsCtrl = (function () {
                function MovieDetailsCtrl(dataAccessService) {
                    this.dataAccessService = dataAccessService;
                    var controller = this;
                    controller.title = 'Movie Details';
                }
                MovieDetailsCtrl.$inject = ["dataAccessService"];
                return MovieDetailsCtrl;
            }());
            Controllers.MovieDetailsCtrl = MovieDetailsCtrl;
            angular.module('movieStore')
                .controller('MovieDetailsCtrl', MovieDetailsCtrl);
        })(Controllers = MovieStore.Controllers || (MovieStore.Controllers = {}));
    })(MovieStore = app.MovieStore || (app.MovieStore = {}));
})(app || (app = {}));
