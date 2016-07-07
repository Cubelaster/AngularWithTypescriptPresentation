namespace app.MovieStore.Models {
    export class Movie
        implements app.MovieStore.Contracts.ModelContracts.IMovieContract {

        constructor(
            public id: number,
            public productName: string,
            public productPrice: number,
            public productDescription: string,
            public movieRating: string,
            public maxRentalPeriod: number,
            public movieGenre: string,
            public lastRentalDate?: Date,
            public imageUrl?: string
            ) 
            { let Movie = this; }

        rentIt = () => {
            this.lastRentalDate = new Date();
        }

        shouldBeReturned = (): string | Date => {
            if (this.lastRentalDate === undefined) {
                return 'Movie is available';
            } else {
                var dueDate = new Date(this.lastRentalDate
                    .setTime(this.lastRentalDate.getTime() +
                    this.maxRentalPeriod * 86400000)
                );
                return dueDate;
            }
        }
    }
}