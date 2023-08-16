// step:1 get the button and add event listeners
document.getElementById('btn-deposite').addEventListener('click', function(){
    // console.log('deposite clicked');
    // step:2 get input depositeAmount 
    const  depositeAmount=document.getElementById('input-deposite');
    const depositeAmountValue=depositeAmount.value;
    const NewDepositeAmount=parseFloat(depositeAmountValue);
    // console.log(NewDepositeAmount);
    // step-3 empty input field 
    depositeAmount.value='';
    if(isNaN(NewDepositeAmount)){
        alert("please provide a number of amount");
        return;
     }

    // step:4 get privous deposite amount 
    const oldDepositeAmount=document.getElementById('total-deposite');
    const oldDepositeAmountValue=oldDepositeAmount.innerText;
    const previousDepositeAmount=parseFloat(oldDepositeAmountValue);
    // console.log(previousDepositeAmount);

    // step:5 sum previousDepositeAmount+NewDepositeAmount
    const newTotalDepositeAmount=previousDepositeAmount+NewDepositeAmount;
    oldDepositeAmount.innerText=newTotalDepositeAmount;

//    step:6 get old total balnce    
 const oldBalanceAmount=document.getElementById('total-balance');
 const oldBalanceAmountValue=oldBalanceAmount.innerText;
 const previouTotalBalance=parseFloat(oldBalanceAmountValue); 
//  console.log(previouTotalBalance);

// step:7 sum previouTotalBalance +newTotalDepositeAmount
const newTotalBalanceAmount=previouTotalBalance+newTotalDepositeAmount;
oldBalanceAmount.innerText=newTotalBalanceAmount;
})