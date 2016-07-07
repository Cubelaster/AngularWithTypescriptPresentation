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

        getDueDate = () => {
            return this.lastRentalDate;
        }

        getVoteCount = () => {
            return this.voteCount;
        }

        rentIt = () => {
            // this._lastRentalDate = new Date();
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
            if (movie._lastRentalDate === undefined) {
                return 'Movie is available';
            } else {
                var dueDate = new Date(movie._lastRentalDate
                    .setTime(movie._lastRentalDate.getTime() +
                    movie.maxRentalPeriod * 86400000)
                );
                return dueDate;
            }
        }

        public set lastRentalDate(dueDate: any) {
            var movie = this;
            movie._lastRentalDate = dueDate;
        }
    }
}