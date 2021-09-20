const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("error-message");



checkButton.addEventListener("click",function validateBillAndCashAmount(){
    if(billAmount.value > 0){

    }
    else{
        message.innerText = "The bill amount should be greater than 0";
    }
});