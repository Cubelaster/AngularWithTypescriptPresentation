namespace app.MovieStore.Contracts.ControllerContracts {
    export interface IMovieDetailsCtrlContract 
        extends app.common.Contracts.ControllerContracts.IControllerContract {
            movie: app.MovieStore.Contracts.ModelContracts.IMovieContract;
    }
}