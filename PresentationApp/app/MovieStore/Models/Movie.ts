namespace app.MovieStore.Models {

    export class Movie
        implements app.MovieStore.Contracts.ModelContracts.IMovieContract {
        _voteCount: number;
        constructor(
            public id: number,
            public productName: string,
            public productPrice: number,
            public productDescription: string,
            public movieRating: string,
            public maxRentalPeriod: number,
            public movieGenre: string,
            private _lastRentalDate?: Date,
            public imageUrl?: string
        ) {
            let movie = this;
            movie._voteCount = 0;
        }

        getDueDate = (): any => {
            var movie = this;
            if (movie._lastRentalDate === undefined) {
                return 'Movie is available';
            } else {
                var dueDate = movie._lastRentalDate.getDate() + movie.maxRentalPeriod.valueOf() ;
                return ( dueDate + '.' +  (parseInt ( movie._lastRentalDate.getMonth().toFixed()) + 1) + '.' + movie._lastRentalDate.getFullYear());
            }
        }

        getVoteCount = () => {
            return this.voteCount;
        }

        rentIt = () => {
            this.lastRentalDate = new Date();
            alert('Rented');
        }

        public get voteCount(): number {
            return this._voteCount;
        }


        upVoteMovie = (): void => {
            this._voteCount++;
        }

        downVoteMovie = (): void => {
            this._voteCount--;
        }

        public get lastRentalDate(): any {
            var movie = this;
            return movie._lastRentalDate;
        }

        public set lastRentalDate(dueDate: any) {
            var movie = this;
            movie._lastRentalDate = dueDate;
        }
    }
}