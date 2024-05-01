"use strict"

const monthlyPayoutInput = document.getElementById("monthlyPayoutInput");
const interestRateInput = document.getElementById("interestRateInput");
const amountYearsInput = document.getElementById("amountYearsInput");

const calculateBtn =  document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const presentValueOutut = document.getElementById("presentValueOutput");

window.onload = init;

function init() {
    calculateBtn.onclick = onCalculateBtnClicked;
    resetBtn.onclick = onResetBtnClicked;

}

function onCalculateBtnClicked() {
    let monthlypayout = Number(monthlyPayoutInput.value);
    let interestRate = Number(interestRateInput.value) / 100; 
    let amountYears = Number(amountYearsInput.value);
    let monthlyInterest = interestRate / 12;
    let amountMonths = amountYears * 12

    let presentValue = monthlypayout *((1-(1 + monthlyInterest)**-amountMonths) / monthlyInterest);

    presentValueOutut.value = presentValue.toFixed(2);




}


function onResetBtnClicked() {
    monthlyPayoutInput.value = "";
    interestRateInput.value = "";
    amountYearsInput.value = "";
    presentValueOutut.value = "";

}