// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

const reviews = [
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

function showReviewTotal( value : number, lastReviewer : string, isLoyaltyMember : boolean ){
    let loyaltyIcon = isLoyaltyMember ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'Total reviews ' + value.toString() + " Last Reviewed by " + lastReviewer
}

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

function populateUser( isReturning : boolean , userName : string ){
    if (isReturning){
        reviewTotalDisplay.innerHTML = 'back'
    } else {
        userNameDisplay.innerHTML = userName
    }
}

populateUser( you.isReturning , you.userName.firstName +  ' ' + you.userName.lastName )