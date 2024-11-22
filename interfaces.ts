import { UserRating  } from './enums'

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: UserRating;
    date: string;
    description?: any;
}