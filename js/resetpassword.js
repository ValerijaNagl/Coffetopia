document.getElementById("reset-btn").addEventListener("click", hideFirstForm);
document.getElementById("resetuj-link").addEventListener("click", hideSecondForm);

function hideFirstForm(){
  let email = document.getElementById("inputEmailReset").value;
  if(ValidateEmail(email)){
    document.getElementById("form").style.display = "none";
    document.getElementById("email-mistake").style.visibility  = "hidden";
    document.getElementById("second-form").style.display = "block";
    document.getElementById("email").innerHTML = email;
    document.getElementById("email").style.textDecoration  = "none";
    document.getElementById("email").style.fontStyle = "italic";
    document.getElementById("email").style.color  = "black";
  }else{
    document.getElementById("email-mistake").style.visibility  = "visible";
  }

}

function hideSecondForm(){
  document.getElementById("second-form").style.display = "none";
  document.getElementById("form").style.display = "inherit";
}


function ValidateEmail(mail){
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}


function resetMistake(){
  document.getElementById("email-mistake").style.visibility = "hidden";
}
