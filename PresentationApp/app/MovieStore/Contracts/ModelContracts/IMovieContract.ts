namespace app.MovieStore.Contracts.ModelContracts {
    export interface iMovieContract 
        extends app.common.Contracts.ModelContracts.IProductContract {
            movieRating: string;
            maxRentalPeriod: number;
            movieGenre: string;
            lastRentalDate?: Date;
            imageUrl?: string;
            rentIt(): void;
            shouldBeReturned(): any;
        }
}