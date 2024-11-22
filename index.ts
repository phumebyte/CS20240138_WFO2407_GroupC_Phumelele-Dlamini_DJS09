import { showReviewTotal, populateUser } from './utils'

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;

}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you: {
    userName:
    {
        firstName: string;
        lastName: string;
        age: number;
    };
    isReturning : boolean;
    stayedAt: (string)[]; 
    
} = {
    userName: 
    {   
        firstName: 'Bobby',
        lastName: 'Brown',
        age: 25,
    },
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

populateUser( you.isReturning , you.userName.firstName +  ' ' + you.userName.lastName )

const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[]= [{
    image: '',
    title: 'Polish Cottage',
    price: 34,
    location: {
        firstLine: 'no 5',
        city: 'Gdansk',
        code: 343903,
        country: 'Poland',
    },
    contact: 'john@hotmail.com',
    isAvailable: false,
},
{
    image: '',
    title: 'Colombian Shack',
    price: 100,
    location: {
        firstLine: 'Shack 123',
        city: 'Bogota',
        code: 11000,
        country: 'Colombia',
    },
    contact: 'mary@email.com',
    isAvailable: true,
},
{
    image: '',
    title: 'California Hotel',
    price: 234,
    location: {
        firstLine: '7th Avenue',
        city: 'Berkley',
        code: 11000,
        country: 'United States',
    },
    contact: 'sydney@gmail.com',
    isAvailable: true,

}]