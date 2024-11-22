import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils'
import { Permissions , UserRating  } from './enums'
import { Price , Country} from './types'

const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: UserRating;
    date: string;
    description?: any;

}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: UserRating.SILVER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: UserRating.BRONZE,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: UserRating.SILVER,
        date: '27-03-2021',
        description: 'Great hosts and amazing views'
    },
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you = {
    userName: 
    {   
        firstName: 'Bobby',
        lastName: 'Brown',
        age: 25,
    },
    permissions: Permissions.ADMIN,
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

populateUser( you.isReturning , you.userName.firstName +  ' ' + you.userName.lastName )

const properties : {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
    };
    contact: [number, string];
    isAvailable: boolean;
}[]= [{
    image: 'https://www.google.com/imgres?q=polish%20cottage&imgurl=https%3A%2F%2Fi.redd.it%2Fs7oic08mh8y41.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FFairytaleasFuck%2Fcomments%2Fgi0txd%2Ftraditional_style_painted_polish_cottage%2F&docid=vZhv5ogiaE0zEM&tbnid=0lyBQQnssQ3q_M&vet=12ahUKEwjXy6T32_CJAxUpWUEAHW3uNPoQM3oECHsQAA..i&w=960&h=720&hcb=2&ved=2ahUKEwjXy6T32_CJAxUpWUEAHW3uNPoQM3oECHsQAA',
    title: 'Polish Cottage',
    price: 25,
    location: {
        firstLine: 'no 5',
        city: 'Gdansk',
        code: 343903,
        country: 'Poland',
    },
    contact: [ +1299847316 , 'john@hotmail.com'],
    isAvailable: false,
},
{
    image: 'https://www.google.com/imgres?q=columbian%20shack&imgurl=https%3A%2F%2Ftheworldonmynecklace.com%2Fwp-content%2Fuploads%2F2023%2F04%2FHumpback-Turtle-bungalow.jpg&imgrefurl=https%3A%2F%2Ftheworldonmynecklace.com%2Fel-valle-colombia-pacific-coast%2F&docid=lGwvOMP3YysaiM&tbnid=2qi3cnB8ZId4IM&vet=12ahUKEwir74SC3PCJAxXkZ0EAHcOIM2sQM3oECE8QAA..i&w=1100&h=733&hcb=2&ved=2ahUKEwir74SC3PCJAxXkZ0EAHcOIM2sQM3oECE8QAA',
    title: 'Colombian Shack',
    price: 45,
    location: {
        firstLine: 'Shack 123',
        city: 'Bogota',
        code: 11000,
        country: 'Colombia',
    },
    contact: [+4317563241, 'mary@email.com'],
    isAvailable: true,
},
{
    image: 'https://www.google.com/imgres?q=california%20hotel&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F29%2F69%2Fe2%2Fe1%2Fckh-ss-hotelproperty.jpg%3Fw%3D700%26h%3D-1%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.com%2FHotel_Review-g45963-d91763-Reviews-California_Hotel_and_Casino-Las_Vegas_Nevada.html&docid=yOjeRfieUP6_zM&tbnid=OK7MiBviSEGmhM&vet=12ahUKEwi8naaN3PCJAxX2QkEAHfLOAd0QM3oECB0QAA..i&w=700&h=700&hcb=2&ved=2ahUKEwi8naaN3PCJAxX2QkEAHfLOAd0QM3oECB0QAA',
    title: 'California Hotel',
    price: 30,
    location: {
        firstLine: '7th Avenue',
        city: 'Berkley',
        code: 11000,
        country: 'United States',
    },
    contact: [ + 55523574841, 'sydney@gmail.com'] ,
    isAvailable: true,

}]

for ( let i =0 ; i < properties.length; i++  ){
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.src = properties[i].image
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}

let count = 0
function addReviews(array: {
    name: string;
    stars: number;
    loyaltyUser: UserRating;
    date: string;
}[] ) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length ; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))


let currentLocation : [string , string, number] = ['Newcastle', '11:35', 23]
footer.innerHTML = currentLocation[0] +  ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°C'


