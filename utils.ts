const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal( value : number, lastReviewer : string, isLoyaltyMember : boolean ){
    let loyaltyIcon = isLoyaltyMember ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'Total reviews ' + value.toString() + " Last Reviewed by " + lastReviewer
}

export function populateUser( isReturning : boolean , userName : string ){
    if (isReturning){
        reviewTotalDisplay.innerHTML = 'back'
    } else {
        userNameDisplay.innerHTML = userName
    }
}