// step :1
document.getElementById('btn-submit').addEventListener('click', function(){

    // console.log('submit button clicked');
    // step:2
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    // console.log(email, password);
   
    // Denger:don't use this process for validation
    // setp -4 verify valid user 
    if(email === "sontan@gmail.com" && password === "secret"){
        // console.log("You are valid user");
        window.location.href="bank.html";
    }
    else{
        alert("You are not valid user");
    }
 
});