
// step:1 get btn and check work 
document.getElementById('btn-withdraw').addEventListener('click',function() {

    // step:2 get input value how much withdraw 
 const withdrawAmout=document.getElementById('withdraw-amount');
 const withdrawAmountValue=withdrawAmout.value;
 const newWithdrawAmount=parseFloat(withdrawAmountValue);
//  console.log(newWithdrawAmount);
 //  step:7 input placeholder empty korte necer code 
 withdrawAmout.value='';

 //    setp 9: validaton test for input field
 if(isNaN(newWithdrawAmount)){
    alert("please provide a number of amount");
    return;
 }

//  step-3:get current withdraw amount
 const currentWithdraw=document.getElementById('total-withdraw');
 const currentWithdrawValue=currentWithdraw.innerText;
 const previousWithdrawAmount=parseFloat(currentWithdrawValue);

//   step:5 get total current balance
const balanceTotatAmount = document.getElementById('total-balance');
const balanceTotatAmountvalue= balanceTotatAmount.innerText;
 const previousbalanceAmount =parseFloat(balanceTotatAmountvalue);
//  console.log(previousbalanceAmount);

//    setp 10: validaton test for 
if(newWithdrawAmount>previousbalanceAmount){
    alert("Baappar Account a taka ni");
    return;
}

// step:4 get total withdrow amout add newWithdrawAmount+previousWithdrawAmount
const currentTotaLWithdrawAmount=previousWithdrawAmount+newWithdrawAmount;
currentWithdraw.innerText=currentTotaLWithdrawAmount;

  // setp:6- subruction/mainas current and  previous balanceTotatAmount
  const currentBalanceTotatAmount = previousbalanceAmount - newWithdrawAmount;
  balanceTotatAmount.innerText = currentBalanceTotatAmount;



}) ;  