const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const strengthBar = document.getElementById("strengthBar");

// password.addEventListener('input', () => {
//     if(password.value.length > 0){
//         message.style.display = "block";
//     }
//     else{
//         message.style.display = "none";
//     }

//     if(password.value.length < 4){
//         strength.innerHTML = "weak";
//         password.style.borderColor = "#FF4B5C";
//     }
//     else if(password.value.length >= 4 && password.value.length <= 8){
//         strength.innerHTML = "medium";
//         password.style.borderColor = "#FFA500";
//     }
//     else{
//         strength.innerHTML = "strong";
//         password.style.borderColor = "#00B894";
//     }
// });


password.addEventListener('input' , () => {
    const val = password.value;
    let score = 0;
    


    if(val.length >= 8) score++;
    if(/[A-Z]/.test(val)) score++;
    if(/[a-z]/.test(val)) score++;
    if(/[0-9]/.test(val)) score++;
    if(/[^A-Za-z0-9]/.test(val)) score++;

    if(score <= 2){
        strength.innerHTML = "weak";
        password.style.borderColor = "#FF4B5C";
        strengthBar.style.width = "25%";
        strengthBar.style.background  = "#FF4B5C";
    }
    else if(score < 5){
        strength.innerHTML = "medium";
        password.style.borderColor = "#FFA500";
        strengthBar.style.width = "50%";
        strengthBar.style.background = "#FFA500";
    }
    else if(score === 5){
        strength.innerHTML = "strong";
        password.style.borderColor = "#00B894";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "#00B894";
    }
    const lengthCon= document.getElementById("length");
    const upperCon = document.getElementById("upper");
    const lowerCon = document.getElementById("lower");
    const numberCon = document.getElementById("number");
    const specialCon = document.getElementById("special");

 
    lengthCon.style.color = val.length >= 8 ? "#00B894" : "#FF4B5C";
    upperCon.style.color = /[A-Z]/.test(val) ? "#00B894" : "#FF4B5C";
    lowerCon.style.color = /[a-z]/.test(val) ? "#00B894" : "#FF4B5C";
    numberCon.style.color = /[0-9]/.test(val) ? "#00B894" : "#FF4B5C";
    specialCon.style.color = /[^A-Za-z0-9]/.test(val) ? "#00B894" : "#FF4B5C";

    if(val.length === 0){
        [lengthCon,upperCon,lowerCon,numberCon,specialCon].forEach(element =>{
            element.style.color = "black";
        });
        message.style.display = "none";
        password.style.borderColor = "#FFFFFF";
        strengthBar.style.width = "0%";  

    }
    else{
        message.style.display = "block";
    }
})