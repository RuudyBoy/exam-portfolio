const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function forms(event) {
    
    event.preventDefault();

    if (fullName.value.trim().length > 4) {
        fullNameError.style.display = "none";
        
    } else {
        fullNameError.style.display ="block";
      
    }

    if (subject.value.trim().length >= 15) {
        subjectError.style.display = "none";
       
    } else {
        subjectError.style.display ="block";
    }

    if (emailForm(email.value)) {
        emailError.style.display = "none";
       
    } else {
        emailError.style.display = "block";
       
    }

    if (message.value.trim().length > 25) {
        messageError.style.display = "none";
      
    } else {
        messageError.style.display = "block";
    }
}


form.addEventListener("submit", forms);

function emailForm(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matches = regEx.test(email);
    return matches;
}