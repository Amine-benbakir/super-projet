const form=document.querySelector('.signup-form');
const feedback=document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,10}$/;

////// methode 1////////
form.addEventListener('submit',e =>{
e.preventDefault();
//validation 
const username = form.username.value;
console.log(username);


if(usernamePattern.test(username)){
//feedback good info
feedback.textContent='the user name is valid';


}else{
//feedback help info
feedback.textContent='the user name is not  valid';
}
});

////// methode 2////////


form.username.addEventListener('keyup',e =>{
if(usernamePattern.test (e.target.value)){
    console.log('passed');
   form.username.setAttribute('class', 'success');
  
} else{
    console.log('failed');
    form.username.setAttribute('class', 'error');
}


});