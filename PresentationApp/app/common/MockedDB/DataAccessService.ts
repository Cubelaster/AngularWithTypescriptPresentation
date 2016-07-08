namespace app.common.MockedDB {

    interface IDataAccessService {
        getProductResource(): ng.resource.IResourceClass<IMovieResource>;
    }

    interface IMovieResource
        extends ng.resource.IResource<app.MovieStore.Contracts.ModelContracts.IMovieContract> {

    }

    export class DataAccessService implements IDataAccessService {

        movieList;
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {

            this.getProductResource().query(
                (data: app.MovieStore.Contracts.ModelContracts.IMovieContract[]) => {
                    if (this.movieList === undefined) {
                        this.movieList = data;
                        this.setMovieList(this.movieList);
                    }

                })
        }

        setMovieList = (movieList) => {
        }

        getMovieList = () => {
            return this.movieList;
        }

        getProductResource(): ng.resource.IResourceClass<IMovieResource> {
            return this.$resource("store/movieList/:id");
        }
    }
    angular
        .module("app.common.mockedServices")
        .service("dataAccessService", DataAccessService);
}