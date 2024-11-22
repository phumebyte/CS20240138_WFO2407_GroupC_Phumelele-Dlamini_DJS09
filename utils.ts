import { UserRating, Permissions } from "./enums"
import { Review } from './interfaces'

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal( value : number, lastReviewer : string, isLoyaltyMember : UserRating ) : void {
    let loyaltyIcon = UserRating.GOLD ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + "Review" + makeMultiple(value) + "| Last Reviewed by " + lastReviewer + ' ' + loyaltyIcon
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

 export function makeMultiple(value: number) : string{
    if (value > 1 || value === 0) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews:  Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}