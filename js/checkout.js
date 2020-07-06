$('#card').click(function() {
  let value = $("#card").val();
  if(value === "new-card"){
    $(".new-card-form").css("display", "block");
  }else{
    $(".new-card-form").css("display", "none");
  }
});


$('#narucite-btn').click(function() {

  if($('#credit').is(':checked')) {
    if(  $("#firstName").val()==="" || $("#lastName").val()==="" || $("#street").val()===""
        || $("#country").val()===""  || $("#city").val()==="" || $("#zip").val()==="" || $("#phonenumber").val()==="" || $("#email").val()===""){

          $('.message').text("Sva polja moraju biti popunjena!");
          $('.message').css("color", "red");

        }else{

          $('.message').text("Kupovina je uspešno obavljena!");
          $('.message').css("color", "green");

        }
  }else{

    if(  $("#firstName").val()==="" || $("#lastName").val()==="" ||  $("#street").val()===""
        || $("#country").val()===""  || $("#city").val()==="" || $("#zip").val()==="" || $("#phonenumber").val()==="" || $("#email").val()===""
        || $("#cc-name").val()==="" || $("#cc-numbe").val()==="" || $("#cc-expiration").val()==="" || $("#cc-cvv").val()===""){


          $('.message').text("Sva polja moraju biti popunjena!");
          $('.message').css("color", "red");

        }else{

          $('.message').text("Kupovina je uspešno obavljena!!");
          $('.message').css("color", "green");
        }

  }
});
