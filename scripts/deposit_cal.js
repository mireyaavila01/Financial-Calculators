"use strict"

const depositAmountInput = document.getElementById("depositAmountInput");
const interestRateInput = document.getElementById("interestRateInput");
const termLengthInput = document.getElementById("termLengthInput");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const totalValueOutput = document.getElementById("totalValueOutput");
const totalInterestOutput = document.getElementById("totalInterestOutput");

window.onload = init;

function init() {
    calculateBtn.onclick = onCalculateBtnClicked;
    resetBtn.onclick = onResetBtnClicked;

}

function onCalculateBtnClicked() {

    let depositAmount = Number(depositAmountInput.value);
    let interestRate = Number(interestRateInput.value) / 100 ;
    let termLength = Number(termLengthInput.value);
    
    let  totalValue = depositAmount * (1 + interestRate / 365 ) **(365*termLength);
    let totalInterest = depositAmount * interestRate * termLength;

    totalValueOutput.value = totalValue.toFixed(2);
    totalInterestOutput.value = totalInterest.toFixed(2);



}

function onResetBtnClicked() {
    depositAmountInput.value = "";
    interestRateInput.value = "";
    termLengthInput.value = "";
    totalValueOutput.value = "";
    totalInterestOutput.value = "";
}