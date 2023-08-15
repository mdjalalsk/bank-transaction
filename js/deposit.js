// console.log("deposite js working");

// step-1
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2:get input amout for deposite input filed
  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountvalue = depositAmount.value;
  const newDepositAmount = parseFloat(depositAmountvalue);

   //   input placeholder empty korte necer code
   depositAmount.value = "";

//    setp 8: validaton test
  if(isNaN(newDepositAmount)){
    alert("please provide a number of amount");
    return;
 }

  // step:3 get total current deposite amount and update
  const currentDeposite = document.getElementById("deposite-total");
  const currentDepositeValue = currentDeposite.innerText;
  const previousTotalDeposite = parseFloat(currentDepositeValue);
  // input fild and textarea er text/value  pita  (.value) use korta hoi and onno sob kesur value pita (.innerText)

  // step-4 add number tow get  value
  //currentTotalDepositeAmount powar por total deposite amount a set korar jonno necer code
  const currentTotalDepositeAmount = previousTotalDeposite + newDepositAmount;
  currentDeposite.innerText = currentTotalDepositeAmount;

 
  //   step:5 get total current balance
  const balanceTotatAmount = document.getElementById("total-balance");
  const balanceTotatAmountvalue = balanceTotatAmount.innerText;
  const previousbalanceAmount = parseFloat(balanceTotatAmountvalue);

  // setp:6- add current and  previous balanceTotatAmount
  const currentBalanceTotatAmount = previousbalanceAmount + newDepositAmount;
  balanceTotatAmount.innerText = currentBalanceTotatAmount;
});
