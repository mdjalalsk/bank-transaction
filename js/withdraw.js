// step:1 get the button and add event listeners
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // console.log('withdraw clicked');
  // step:2 get input withdrawAmount
  const withdrawAmount = document.getElementById("input-withdraw");
  const withdrawAmountValue = withdrawAmount.value;
  const NewWithdrawAmount = parseFloat(withdrawAmountValue);
  // console.log(NewWithdrawAmount);
  // step-3 empty input field
  withdrawAmount.value = "";

   //    setp 9: validaton test for input field
 if(isNaN(NewWithdrawAmount)){
  alert("please provide a number of amount");
  return;
}

  // step:4 get privous withdraw amount
  const oldWithdrawAmount = document.getElementById("total-withdraw");
  const oldWithdrawAmountValue = oldWithdrawAmount.innerText;
  const previousWithdrawAmount = parseFloat(oldWithdrawAmountValue);
  // console.log(previousWithdrawAmount);


  //    step:6 get old total balnce
  const oldBalanceAmount = document.getElementById("total-balance");
  const oldBalanceAmountValue = oldBalanceAmount.innerText;
  const previouTotalBalance = parseFloat(oldBalanceAmountValue);
  //  console.log(previouTotalBalance);
  //    setp 10: validaton test for 
if(NewWithdrawAmount>previouTotalBalance){
  alert(" This accout has not enough balance ");
  return;
}
  // step:5 sum previousWithdrawAmount+NewWithdrawAmount
  const newTotalWithdrawAmount = previousWithdrawAmount + NewWithdrawAmount;
  oldWithdrawAmount.innerText = newTotalWithdrawAmount;

  // step:7 minas previouTotalBalance - newTotalWithdrawAmount
  const newTotalBalanceAmount = previouTotalBalance - newTotalWithdrawAmount;
  oldBalanceAmount.innerText = newTotalBalanceAmount;
});
