//form validation....

const form=document.querySelector('#form');
const patient_name=document.querySelector('#name');
const email=document.querySelector('#email');
const phone_no=document.querySelector('#phone');

const date=document.querySelector('#date');
const time=document.querySelector('#time');
const discribes=document.querySelector('#describe-box');

form.addEventListener('submit',(e)=>{
 if(!formvalidation()){
    e.preventDefault()
 }
 else{
    alert('Your Appointment successfully finsihed')
    formreset();
 }
})

function formvalidation(){
    const nameval=patient_name.value.trim();
    const emailval=email.value.trim();
    const phoneval=phone_no.value.trim();

    const dateval=date.value.trim();
    const timeval=time.value.trim();
    const discribeval=discribes.value.trim();
   let success=true
 
    //name statement
    if(nameval===''){
        success=false;
        seterror(patient_name,"Patient name is required");
    }
    else{
        setsuccess(patient_name);
    }
    //email
    if(emailval===''){
        success=false;
        seterror(email,"Email is required");
    }
    else if(!validateEmail(emailval)){
        success=false;
        seterror(email,'invalid email')
    }
    else{
        setsuccess(email);
    }




    //phoneno
    if(phoneval===''){
        success=false;
        seterror(phone_no,"Phone number is required");
    }
    else if(phoneval.length<10){
        success=false;
        seterror(phone_no,"phone number is invalid")
    }
    else if(phoneval.length>10){
        success=false;
        seterror(phone_no, 'your given number is to long')
    }
    else{

        setsuccess(phone_no);
    }

    //date
    if(dateval===''){
        success=false;
        seterror(date,"date is required");
    }
    else{
        setsuccess(date);
    }
    //time
    if(timeval===''){
        success=false;
        seterror(time,"time is required");
    }
    else{
        setsuccess(time);
    }
    //discribe
    if(discribeval===''){
        success=false;
        seterror(discribes,"discribes is required");
    }
    else{
        setsuccess(discribes);
    }
    return success;
 
}
function seterror(element,message){
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');
    errorelement.innerHTML=message;

    inputgroup.classList.add('error');
    inputgroup.classList.remove('success')
}
function setsuccess(element){
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');
    errorelement.innerHTML='';

    inputgroup.classList.add('success');
    inputgroup.classList.remove('error')
}
// email valid function
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function formreset(){
    form.reset();
}















