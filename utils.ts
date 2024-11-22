import { UserRating, Permissions } from "./enums"

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal( value : number, lastReviewer : string, isLoyaltyMember : UserRating ){
    let loyaltyIcon = UserRating.GOLD ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'Total reviews ' + value.toString() + " Last Reviewed by " + lastReviewer
}

export function populateUser( isReturning : boolean , userName : string ){
    if (isReturning){
        reviewTotalDisplay.innerHTML = 'back'
    } else {
        userNameDisplay.innerHTML = userName
    }
}

export function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
 }