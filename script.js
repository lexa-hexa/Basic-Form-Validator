const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
//arrow function
const error = (input, message) => {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
};

const success = (input) => {
    input.className = "form-control is-valid";
};
//farklı yazılış şekli
//function success(input){
//    input.className = "form-control is-valid";
//}

const validateEmail = (input) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(re.test(input.value)){
            success(input);
        }else{
            error(input, "Hatalı mail adresi giriyorsun!");
        }

    };

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, `${input.id} gereklidir lütfen doldurunuz!`)
        }else{
            success(input);
        }
    });
}

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter girebilirsiniz!`);
    }else if(input.value.length > max){
        success(input, `${input.id} en çok ${max} karakter girebilirsiniz!`);
    }else{
        success(input);
    }
}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        error(input2, "Parolalar aynı değil!");
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input, "Telefon numaranıza 0 eklemeden yazınız!");
    }
}

/*--yöntemlerden biri
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        error(username, "Lüften username giriniz!");
    }else{
        success(username);
    }

    if(email.value === ''){
        error(email, "Lüften e-mail giriniz!");
    }else if(!validateEmail(email.value)){
        error(email, "Lütfen düzgün bir mail adresi giriniz!");
    }else{
        success(email);
    }

    if(password.value === ''){
        error(password, "Lüften password giriniz!");
    }else{
        success(password);
    }

    if(repassword.value === ''){
        error(repassword, "Lüften repassword giriniz!");
    }else{
        success(repassword);
    }
    
    console.log(username.value);
});*/

//daha basit yapım
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, repassword, phone]);
    validateEmail(email);
    checkLength(username, 4, 12);
    checkLength(password, 6, 20);
    checkPasswords(password, repassword);
    checkPhone(phone);
});