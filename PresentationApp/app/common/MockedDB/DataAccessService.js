var app;
(function (app) {
    var common;
    (function (common) {
        var MockedDB;
        (function (MockedDB) {
            var DataAccessService = (function () {
                function DataAccessService($resource) {
                    var _this = this;
                    this.$resource = $resource;
                    this.setMovieList = function (movieList) {
                    };
                    this.getMovieList = function () {
                        return _this.movieList;
                    };
                    this.getProductResource().query(function (data) {
                        if (_this.movieList === undefined) {
                            _this.movieList = data;
                            _this.setMovieList(_this.movieList);
                        }
                    });
                }
                DataAccessService.prototype.getProductResource = function () {
                    return this.$resource("store/movieList/:id");
                };
                DataAccessService.$inject = ["$resource"];
                return DataAccessService;
            }());
            MockedDB.DataAccessService = DataAccessService;
            angular
                .module("app.common.mockedServices")
                .service("dataAccessService", DataAccessService);
        })(MockedDB = common.MockedDB || (common.MockedDB = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
