document.getElementById("register-btn").addEventListener("click", register);
document.getElementById("login-btn").addEventListener("click", login);

// imitates login method
function login(){
  let username = $('#inputEmail').val();
  let password = $('#inputPassword').val();

  if(username!=='valerija'){
    document.getElementById("error-email-login").style.visibility = "visible";
  }else{
    document.getElementById("error-email-login").style.visibility = "hidden";
  }

  if(password!=='pass'){
    document.getElementById("error-password-login").style.visibility = "visible";
  }else{
    document.getElementById("error-password-login").style.visibility = "hidden";
  }

  if(password==="pass" && username==="valerija"){
    location.href = "profile.html";
  }
}

function register(){
  let email = $('#emailRegister').val();
  let password = $('#passwordRegister').val();

  if(!ValidateEmail(email)){
    document.getElementById("error-email-register").style.visibility = "visible";
  }else{
    document.getElementById("error-email-register").style.visibility = "hidden";
  }

  if(password.length < 8){
    document.getElementById("error-password-register").style.visibility = "visible";
  }else{
    document.getElementById("error-password-register").style.visibility = "hidden";
  }

  if(ValidateEmail(email) && password.length>7){
    document.getElementById("error-email-register").style.visibility = "visible";
    document.getElementById("error-email-register").innerHTML = "Uspešno ste se registrovali!";
    document.getElementById("error-email-register").style.color = "green";
    $('#emailRegister').val("");
    $('#passwordRegister').val("");
  }
}

// checks if email is valid
function ValidateEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}
