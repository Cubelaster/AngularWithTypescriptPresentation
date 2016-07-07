namespace app.MovieStore.Controllers {
    export class MovieListCtrl
        implements app.MovieStore.Contracts.ControllerContracts.IMovieListCtrlContract {

        public title: string;
        public movieList: app.MovieStore.Models.Movie[];
        public sortDirection: string;
        public sortColumn: string;
        public searchedTerm: string;

        constructor(
        ) {
            let controller = this;
            controller.title = 'List of movies';
        }

        fetchMovieList = (): app.MovieStore.Models.Movie[] => {
            return;
        }
    }
    angular.module('movieStore')
        .controller('MovieListCtrl', MovieListCtrl);
}
