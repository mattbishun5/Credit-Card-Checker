// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (card) => {
  let cardInverted = card.slice().reverse(); //reversing Credit card number and then iterate to the left. As per lohn's algorithm.
  
  for (let i = 0; i < cardInverted.length; i++){
    if(i % 2 != 0){ //finding odd indexes, as these will have a modulus > 0
    cardInverted[i] = cardInverted[i] * 2; //double every other digit in array
      if (cardInverted[i] > 9){
        cardInverted[i] -= 9;   //subtract 9 from number if more than 9 once doubled
      }
  } 
} 
  
  let total = cardInverted.reduce((a, b) => a + b); //add all numbers in the array
  if(total % 10 == 0){
    return true; //if even number
  }else{
    return false; //if odd number
  }
}
// console.log(validateCred(valid2)); // Should print true
// console.log(validateCred(invalid2)); // Should print false

const findInvalidCards = (cards) => {
  
let invalidCards = []; //invalidCards array
  
  for (i = 0; i < cards.length; i++){
    let currCard = cards[i]; //Current card is set as the index within the cards array parameter
    if(!validateCred(currCard)){ //if not valid then push current Card to Array
      invalidCards.push(currCard);
    }
  }
  
    return invalidCards;      
} 


const idInvalidCardCompanies = (invalidNums) => {

let companies = [];

  //looping through Invalid numbers array
  for (i = 0; i < invalidNums.length; i++){
    let firstDigit = invalidNums[i][0];  //Set first digit of credit card number
    switch(firstDigit){
      case 3:
        if(companies.indexOf("Amex") === -1){  //if not in Companies array then add to it
              companies.push("Amex");
        }
              break;
      case 4: 
        if(companies.indexOf("Visa") === -1){
              companies.push("Visa");
        }
              break;
      case 5: 
        if(companies.indexOf("Mastercard") === -1){
              companies.push("Mastercard");
      }
              break;
      case 6: 
        if(companies.indexOf("Discover") === -1){
              companies.push("Discover");
        }
              break;
      default:
              console.log("Company not found");   //if no companies found display error message
        }
  }
  
 return companies; 
}
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Companies that have sent invalid cards




