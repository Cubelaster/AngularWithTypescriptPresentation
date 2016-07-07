var app;
(function (app) {
    var common;
    (function (common) {
        var MockedDB;
        (function (MockedDB) {
            var DataAccessService = (function () {
                function DataAccessService($resource) {
                    this.$resource = $resource;
                }
                DataAccessService.prototype.getProductResource = function () {
                    return this.$resource("store/movieList");
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
