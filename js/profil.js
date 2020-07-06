$('#sacuvaj-btn').click(function() {
    if($("#firstName").val()==="" || $("#lastName").val()==="" || $("#phonenumber").val()==="" || $("#email").val()===""){
      $('.message1').text("Sva polja moraju biti popunjena!");
      $('.message1').css("color", "red");
    }else{
      if(ValidateEmail($("#email").val())){
        $('.message1').text("Promene su sačuvane!");
        $('.message1').css("color", "green");
      }else{
        $('.message1').text("Email adresa mora biti validna!");
        $('.message1').css("color", "red");
      }
    }
});


$('#lozinka-btn').click(function() {
    if($("#curr-pass").val()==="" || $("#new-pass").val()===""){
      $('.message2').text("Sva polja moraju biti popunjena!");
      $('.message2').css("color", "red");
    }else{
      if($("#curr-pass").val()!=="pass"){
        $('.message2').text("Niste uneli tačnu trenutnu lozinku!");
        $('.message2').css("color", "red");
      }else{
          if($("#new-pass").val().length < 8){
            $('.message2').text("Nova lozinka mora da ima najmanje 8 karaktera!");
            $('.message2').css("color", "red");
          }else{
            $('.message2').text("Uspešno ste promenili lozinku!");
            $('.message2').css("color", "green");
          }
      }
    }
});


$('#logout-btn').click(function() {
  document.location.href = 'loginAndRegister.html#';
});


$('#delete-acc-btn').click(function() {
  $('.modal').css("display", "inherit");
});


$('.yes').click(function() {
  document.location.href = 'loginAndRegister.html#';
});

$('.no').click(function() {
  $('.modal').css("display", "none");
});

$('.close').click(function() {
  $('.modal').css("display", "none");
});




function ValidateEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}
