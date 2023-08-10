let emailLogin = document.getElementById("email-login")
let emailLabel = document.getElementById("email-label")
let emailError = document.getElementById("email-error")


function changeLabelPosition()
{
    emailLabel.style.bottom = "32px"
    emailLabel.style.fontSize = ".8rem"
}

function validate()
{
    validateEmail()
}

function validateEmail()
{
    if (!emailLogin.value)
    {
        emailLabel.style.bottom = "18px"
        emailLabel.style.fontSize = "1rem"
        emailError.innerHTML = "⊗ Email is required.";
        emailLogin.style.borderColor = "red"
        return false
    }
    else if (!emailLogin.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = "⊗ Please enter a valid email address.";
        emailError.style.fontSize = ".8rem"
        emailError.style.fontWeight = "500"
        emailLogin.style.borderColor = "red"
        emailLabel.style.bottom = "32px"
        emailLabel.style.fontSize = ".8rem"
        return false
    }
    else
    {
        emailError.innerHTML = ""
        emailLogin.style.borderColor = "#1CAC78"
        return true;
    }
}


let emailLogin2 = document.getElementById("email-login2")
let emailLabel2 = document.getElementById("email-label2")
let emailError2 = document.getElementById("email-error2")


function changeLabelPosition2()
{
    emailLabel2.style.bottom = "32px"
    emailLabel2.style.fontSize = ".8rem"
}

function validate2()
{
    validateEmail2()
}

function validateEmail2()
{
    if (!emailLogin2.value)
    {
        emailLabel2.style.bottom = "18px"
        emailLabel2.style.fontSize = "1rem"
        emailError2.innerHTML = "⊗ Email is required.";
        emailLogin2.style.borderColor = "red"
        return false
    }
    else if (!emailLogin2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError2.innerHTML = "⊗ Please enter a valid email address.";
        emailError2.style.fontSize = ".8rem"
        emailError2.style.fontWeight = "500"
        emailLogin2.style.borderColor = "red"
        emailLabel2.style.bottom = "32px"
        emailLabel2.style.fontSize = ".8rem"
        return false
    }
    else
    {
        emailError2.innerHTML = ""
        emailLogin2.style.borderColor = "#1CAC78"
        return true;
    }
}


const button1 = document.querySelector("#ques1")
const button2 = document.querySelector("#ques2")
const button3 = document.querySelector("#ques3")
const button4 = document.querySelector("#ques4")
const button5 = document.querySelector("#ques5")
const button6 = document.querySelector("#ques6")

let list = document.querySelectorAll(".ques")

button1.addEventListener("click", destroy)
button2.addEventListener("click", destroy)
button3.addEventListener("click", destroy)
button4.addEventListener("click", destroy)
button5.addEventListener("click", destroy)
button6.addEventListener("click", destroy)

function destroy(){
    list.forEach (answer => {
        if (answer.lastElementChild.style.display=="block" && answer.firstElementChild!=this)
        {
            answer.firstElementChild.lastElementChild.style.transform = "rotate(0deg)"
            answer.lastElementChild.style.display = "none"
        }
    });

    let element = this.nextElementSibling
    if (element.style.display == "none")
    {
        this.lastElementChild.style.transform = "rotate(45deg)"
        element.style.display = "block"
    }
    else
    {
        this.lastElementChild.style.transform = "rotate(0deg)"
        element.style.display = "none"
    }
}