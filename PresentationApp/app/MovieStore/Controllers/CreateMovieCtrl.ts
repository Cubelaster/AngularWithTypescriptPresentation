namespace app.MovieStore.Controllers {
    export class CreateMovieCtrl
        implements app.MovieStore.Contracts.ControllerContracts.IMovieDetailsCtrlContract {
        title: string;
        public movie: app.MovieStore.Models.Movie;
        static $inject = ["dataAccessService"];
        constructor(
            private dataAccessService: app.common.MockedDB.DataAccessService
        ) {
            let controller = this;
            controller.title = 'Add a movie';
        }

        createMovie = (movie: app.MovieStore.Contracts.ModelContracts.IMovieContract
            , MovieForm): void => {
            if (MovieForm.$valid) {

                var id = this.dataAccessService.movieList.length + 1;
                this.movie.id = id;
                this.movie.voteCount = 0;
                this.movie.lastRentalDate = undefined;
                var newMovie = new app.MovieStore.Models.Movie(
                        this.movie.id,
                        this.movie.productName,
                        this.movie.productPrice,
                        this.movie.productDescription,
                        this.movie.movieRating,
                        this.movie.maxRentalPeriod,
                        this.movie.movieGenre,
                        this.movie.lastRentalDate,
                        this.movie.imageUrl
                        ); 
                this.dataAccessService.movieList.push(newMovie);
                alert('Successfully created!');
            }
        }
    }
    angular.module('movieStore')
        .controller('CreateMovieCtrl', CreateMovieCtrl);
}