namespace app.MovieStore.Controllers {

    interface IMovieParams extends ng.route.IRouteParamsService {
        id: number;
    }

    export class MovieDetailsCtrl
        implements app.MovieStore.Contracts.ControllerContracts.IMovieDetailsCtrlContract {

        title: string;
        public movie: app.MovieStore.Models.Movie;
        public movieList;

        static $inject = ["$routeParams", "dataAccessService"];
        constructor(
            private $routeParams: IMovieParams,
            private dataAccessService: app.common.MockedDB.DataAccessService
            ) {
            let controller = this;
            controller.title = 'Movie Details';

            for (var i = 0; i < this.dataAccessService.movieList.length; i++) {
                var existingMovie = this.dataAccessService.movieList[i];
                if (existingMovie.id == this.$routeParams.id) {
                    controller.movie = existingMovie;
                }
            }
            // var movieResource = dataAccessService.getProductResource();
            // movieResource.get({ id: $routeParams.id },
            //     (data: app.MovieStore.Models.Movie) => {
            //         this.movie = data;
            //     })
        }

        saveMovie = (movie: app.MovieStore.Contracts.ModelContracts.IMovieContract
            , MovieForm): void => {
            if (MovieForm.$valid) {
                for (var i = 0; i < this.dataAccessService.movieList.length; i++) {
                    var existingMovie = this.dataAccessService.movieList[i];
                    if (existingMovie.id === this.movie.id) {
                        this.dataAccessService.movieList[i] = this.movie;
                        break;
                    }
                }
                alert('Successfully saved!');
            } else {
                alert('Form is invalid!');
            }
        }

        createMovie = (movie: app.MovieStore.Contracts.ModelContracts.IMovieContract
            , MovieForm): void => {
            if (MovieForm.$valid) {
                var id = this.dataAccessService.movieList.length + 1;
                this.movie.id = id;
                this.dataAccessService.movieList.push(this.movie);
                alert('Successfully saved!');
            } else {
                alert('Form is invalid!');
            }
        }

        rentIt = () => {
            this.movie.rentIt();
        }
    }
    angular.module('movieStore')
        .controller('MovieDetailsCtrl', MovieDetailsCtrl);
}