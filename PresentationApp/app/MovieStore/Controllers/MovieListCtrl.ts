namespace app.MovieStore.Controllers {

    export interface IControllerScope extends ng.IScope {
        movieList: app.MovieStore.Contracts.ModelContracts.IMovieContract[];
    }

    export class MovieListCtrl
        implements app.MovieStore.Contracts.ControllerContracts.IMovieListCtrlContract {

        public title: string;
        public movieList: app.MovieStore.Contracts.ModelContracts.IMovieContract[];
        public sortDirection: boolean;
        public sortColumn: string;
        public searchedTerm: string;

        static $inject = ["dataAccessService"];
        constructor(
            private dataAccessService: app.common.MockedDB.DataAccessService
        ) {
            let controller = this;
            controller.title = 'List of movies';
            controller.sortColumn = 'productName';

            var moviesResource = dataAccessService.getProductResource();
            moviesResource.query(
                (data: app.MovieStore.Contracts.ModelContracts.IMovieContract[]) => {
                    if (this.movieList === undefined) {
                        this.movieList = dataAccessService.movieList;
                    }
                })
        }

        fetchMovieList = (): app.MovieStore.Models.Movie[] => {
            return;
        }
    }
    angular.module('movieStore')
        .controller('MovieListCtrl', MovieListCtrl);
}
