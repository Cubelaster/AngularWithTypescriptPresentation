namespace app.common.MockedDB {

    interface IDataAccessService {
        getProductResource() : ng.resource.IResourceClass<IMovieResource>;
    }

    interface IMovieResource 
        extends ng.resource.IResource<app.MovieStore.Contracts.ModelContracts.IMovieContract> {

    }

    export class DataAccessService implements IDataAccessService {
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService){}

        getProductResource() : ng.resource.IResourceClass<IMovieResource> {
            return this.$resource("store/movieList");
        }
    }
    angular
        .module("app.common.mockedServices")
        .service("dataAccessService", DataAccessService);
}