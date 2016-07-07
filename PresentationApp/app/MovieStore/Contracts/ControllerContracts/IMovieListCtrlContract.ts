namespace app.MovieStore.Contracts.ControllerContracts {
    export interface IMovieListCtrlContract 
        extends app.common.Contracts.ControllerContracts.IControllerContract {
            movieList: app.MovieStore.Contracts.ModelContracts.IMovieContract[];
            sortDirection: string;
            sortColumn: string;
            searchedTerm: string;

            fetchMovieList(): app.MovieStore.Models.Movie[];            
    }
}