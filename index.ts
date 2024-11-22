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
    image: 'https://www.google.com/imgres?q=polish%20cottage&imgurl=https%3A%2F%2Fi.redd.it%2Fs7oic08mh8y41.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FFairytaleasFuck%2Fcomments%2Fgi0txd%2Ftraditional_style_painted_polish_cottage%2F&docid=vZhv5ogiaE0zEM&tbnid=0lyBQQnssQ3q_M&vet=12ahUKEwjXy6T32_CJAxUpWUEAHW3uNPoQM3oECHsQAA..i&w=960&h=720&hcb=2&ved=2ahUKEwjXy6T32_CJAxUpWUEAHW3uNPoQM3oECHsQAA',
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
    image: 'https://www.google.com/imgres?q=columbian%20shack&imgurl=https%3A%2F%2Ftheworldonmynecklace.com%2Fwp-content%2Fuploads%2F2023%2F04%2FHumpback-Turtle-bungalow.jpg&imgrefurl=https%3A%2F%2Ftheworldonmynecklace.com%2Fel-valle-colombia-pacific-coast%2F&docid=lGwvOMP3YysaiM&tbnid=2qi3cnB8ZId4IM&vet=12ahUKEwir74SC3PCJAxXkZ0EAHcOIM2sQM3oECE8QAA..i&w=1100&h=733&hcb=2&ved=2ahUKEwir74SC3PCJAxXkZ0EAHcOIM2sQM3oECE8QAA',
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
    image: 'https://www.google.com/imgres?q=california%20hotel&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F29%2F69%2Fe2%2Fe1%2Fckh-ss-hotelproperty.jpg%3Fw%3D700%26h%3D-1%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.com%2FHotel_Review-g45963-d91763-Reviews-California_Hotel_and_Casino-Las_Vegas_Nevada.html&docid=yOjeRfieUP6_zM&tbnid=OK7MiBviSEGmhM&vet=12ahUKEwi8naaN3PCJAxX2QkEAHfLOAd0QM3oECB0QAA..i&w=700&h=700&hcb=2&ved=2ahUKEwi8naaN3PCJAxX2QkEAHfLOAd0QM3oECB0QAA',
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