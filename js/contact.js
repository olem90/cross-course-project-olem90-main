const form = document.querySelector("#contact-form");
const name = document.querySelector("#fullname");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const contactMessage = document.querySelector("#message");
const contactMessageError = document.querySelector("#message-error");
const validation = document.querySelector(".validation-message");

function validateForm(event){
    event.preventDefault();

    if(checkLength(name.value, 0) === true){
        nameError.style.display = "none";
    }
    else{
        nameError.style.display = "block";
    }
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }
    if(checkLength(contactMessage.value, 14) === true){
        contactMessageError.style.display = "none";
    }
    else{
        contactMessageError.style.display = "block";
    }
    
    if(checkLength(name.value, 0) === true && validateEmail(email.value) === true && checkLength(contactMessage.value, 14) === true){
        validation.style.display = "block";
    } 
    else{
        validation.style.display = "none";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else{
        return false;
    }
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}