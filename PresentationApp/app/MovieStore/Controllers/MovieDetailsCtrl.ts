namespace app.MovieStore.Controllers {
    export class MovieDetailsCtrl
        implements app.MovieStore.Contracts.ControllerContracts.IMovieDetailsCtrlContract {
            title: string;
            public movie: app.MovieStore.Contracts.ModelContracts.IMovieContract;

            static $inject = ["dataAccessService"];
            constructor(
                private dataAccessService: app.common.MockedDB.DataAccessService
            ){
                var controller = this;
                controller.title = 'Movie Details';
            }
        }
        angular.module('movieStore')
            .controller('MovieDetailsCtrl', MovieDetailsCtrl);
}