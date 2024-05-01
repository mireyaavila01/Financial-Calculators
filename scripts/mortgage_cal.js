"use strict"

const loanAmountInput = document.getElementById("loanAmountInput");
const interestRateInput = document.getElementById("interestRateInput");
const loanLengthInput = document.getElementById("loanLengthInput");

const calculateBtn= document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const monthlyPaymentOutput = document.getElementById("monthlyPaymentOutput")
const totalInterestOutput = document.getElementById("totalInterestOutput");

window.onload = init;

function init (){
    calculateBtn.onclick = onCalculateBtnClicked;
    resetBtn.onclick = onResetBtnClicked;

}

function onCalculateBtnClicked(){
   
   
    let loanAmount = Number(loanAmountInput.value);
    let interestRate= Number(interestRateInput.value)/ 100;
    let loanLength = Number(loanLengthInput.value);
    let monthlyInterest= interestRate / 12;
    let lengthInMonths= loanLength * 12;
    
//calculations

    let equation1 = monthlyInterest * (1 + monthlyInterest)**lengthInMonths;
    let equation2 = ((1+ monthlyInterest)**lengthInMonths) -1 ;

    let monthlyPayment = loanAmount * (equation1 / equation2);
    let totalInterest = (monthlyPayment * lengthInMonths) - loanAmount;

//the results 

    monthlyPaymentOutput.value = monthlyPayment.toFixed(2);
    totalInterestOutput.value = totalInterest.toFixed(2);
    
}

function onResetBtnClicked() {
    loanAmountInput.value = "";
    interestRateInput.value = "";
    loanLengthInput.value = "";
    monthlyPaymentOutput.value = "";
    totalInterestOutput.value = "";
}